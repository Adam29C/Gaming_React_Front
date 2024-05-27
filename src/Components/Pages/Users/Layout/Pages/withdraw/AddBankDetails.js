import React, { useState } from "react";
// import Withdraw from "./Withdraw";
import Model from "../../../../../Helpers/Model";
import { useFormik } from "formik";
import Formikform from "../../../../../Helpers/Form";
import { AddAccountDetails } from "../../../../../Service/user.service";
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

  const isValidPassword = (mobile) => {
    return Password_Rejex(mobile);
  };

  const formik = useFormik({
    initialValues: {
      isBank: null,
      accountNumber: "",
      ifscCode: "",
      bankName: "",
      upiId: "",
      upiName: "",
      password: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.isBank && formik.touched.isBank) {
        errors.isBank = valid_err.EMPTY_SELECT_BANK_ERROR;
      } else if (values.isBank == "true") {
   
        if (!values.bankName) {
          errors.bankName = valid_err.EMPTY_BANK_NAME_ERROR;
        }
        if (!values.accountNumber) {
          errors.accountNumber = valid_err.EMPTY_BANK_ACCOUNT_NUMBER_ERROR;
        }

        if (!values.ifscCode) {
          errors.ifscCode = valid_err.EMPTY_BANK_IFSC_ERROR;
        }
      } else if (values.isBank == "false") {
        if (!values.upiId) {
          errors.upiId = valid_err.EMPTY_UPI_ERROR;
        }

        if (!values.upiName) {
          errors.upiName = valid_err.EMPTY_UPI_NAME_ERROR;
        }
      }

      if (!values.password) {
        errors.password = valid_err.PASSWORD_ERROR;
      }


      console.log("errors", errors);
      return errors;
    },
    onSubmit: async (values) => {
      const req = {
        userId: userId,
        isBank: Boolean(values.isBank),
        accountNumber: values.accountNumber,
        ifscCode: values.ifscCode,
        bankName: values.bankName,
        password: values.password,
      };
      const req1 = {
        userId: userId,
        isBank: Boolean(!values.isBank),
        upiId: values.upiId,
        upiName: values.upiName,
        password: values.password,
      };

      let abc = values.isBank === "true" ? req : req1;

      const response = await AddAccountDetails(
        values.isBank === "true" ? req : req1,
        token,
        navigate
      );

      if (response.statusCode == 200) {
        toast.success(response.msg);
        setShow(!show);
      } else {
        toast.error(response.response.data.msg);
      }
    },
  });

  const fields = [
    {
      name: "isBank",
      label: "Account Type",
      type: "select",
      label_size: 12,
      col_size: 12,
      options: [
        { label: "UPI", value: false },
        { label: "Bank Account", value: true },
      ],
    },
    {
      name: "accountNumber",
      label: "A/C Number",
      type: "text",
      label_size: 12,
      col_size: 12,
      showWhen: (values) => values.isBank && values.isBank === "true",
    },
    {
      name: "ifscCode",
      label: "IFSC Number",
      type: "text",
      label_size: 12,
      col_size: 12,
      showWhen: (values) => values.isBank && values.isBank === "true",
    },
    {
      name: "bankName",
      label: "Bank Name",
      type: "text",
      label_size: 12,
      col_size: 12,
      showWhen: (values) => values.isBank && values.isBank === "true",
    },

    {
      name: "upiName",
      label: "UPI Name",
      type: "text",
      label_size: 12,
      col_size: 12,
      showWhen: (values) => values.isBank && values.isBank === "false",
    },
    {
      name: "upiId",
      label: "UPI Id",
      type: "text",
      label_size: 12,
      col_size: 12,
      showWhen: (values) => values.isBank && values.isBank === "false",
    },
    {
      name: "password",
      label: "WITHDRAW PASSWORD",
      type: "password",
      label_size: 12,
      col_size: 12,
      showWhen: (values) => values.isBank && values.isBank,
    },
  ];

  return (
    <>
      <Model show={show} setShow={setShow}>
        <div className="modal-header">
          <h5 className="modal-title">Add account</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            data-original-title=""
            title=""
            onClick={() => setShow(false)}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="modal-body">
          <Formikform
            fieldtype={fields.filter(
              (field) => !field.showWhen || field.showWhen(formik.values)
            )}
            formik={formik}
            btn_name="Add  Account"
          />
        </div>

        <ToastButton />
      </Model>
    </>
  );
};

export default WithdrawModel;
