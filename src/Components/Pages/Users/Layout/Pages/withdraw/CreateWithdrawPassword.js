import React, { useState, useEffect } from "react";
import Model from "../../../../../Helpers/Model";
import { useFormik } from "formik";
import Formikform from "../../../../../Helpers/Form";
import { CreateWithdrawPassword } from "../../../../../Service/user.service";
import { useDispatch, useSelector } from "react-redux";
import ToastButton from "../../../../../Helpers/Toast";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Password_Rejex } from "../../../../../Utils/Valid_Rejex";
import * as valid_err from "../../../../../Utils/Common_Msg";

const WithdrawModel = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const token = localStorage.getItem("token");

  const formik = useFormik({
    initialValues: {
      newpassword: "",
      confirmpassword: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.newpassword) {
        errors.newpassword = valid_err.NEW_PASSWORD_ERROR;
      }

      if (!values.confirmpassword) {
        errors.confirmpassword = valid_err.CONFIRM_PASSWORD_ERROR;
      } else if (values.confirmpassword !== values.newpassword) {
        errors.confirmpassword = valid_err.CONFIRM_AND_NEW_PASSWORD_ERROR;
      }

      return errors;
    },
    onSubmit: async (values) => {
      const req = {
        userId: userId,
        withdrawalPassword: values.newpassword,
      };

      const response = await CreateWithdrawPassword(req, token);
      // .then((response) => {

      if (response.statusCode === 201) {
        toast.success(response.msg);
        setTimeout(() => {
          setShow(false);
        }, 1000);
      }
      if (response.response.data.statusCode === 400) {
        toast.error(response.response.data.msg);
        setTimeout(() => {
          setShow(false);
        }, 1000);
      } else if (!response.statusCode) {
        toast.error(response.msg);
      }
    },
  });

  const fields = [
    {
      name: "newpassword",
      label: "New Password",
      type: "password",
      label_size: 12,
      col_size: 12,
    },
    {
      name: "confirmpassword",
      label: "Confirm Password",
      type: "password",
      label_size: 12,
      col_size: 12,
    },
  ];

  return (
    <>
      <Model show={show} setShow={setShow} centered={true}>
        <div className="modal-header">
          <h5 className="modal-title">Create Withdraw Password</h5>
          <button
            type="button"
            className="close"
            // data-dismiss="modal"
            // aria-label="Close"
            data-original-title=""
            title=""
            onClick={() => setShow(false)}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="modal-body">
          <Formikform
            fieldtype={fields.filter((field) => !field.showWhen)}
            formik={formik}
            btn_name="Create"
          />
        </div>

        <ToastButton />
      </Model>
    </>
  );
};

export default WithdrawModel;
