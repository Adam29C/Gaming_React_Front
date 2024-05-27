import React, { useState } from "react";
import Formikform from "../../../Helpers/Form";
import { useFormik } from "formik";
import * as valid_err from "../../../Utils/Common_Msg";
import toast from "react-hot-toast";
import { getGame } from "../../../Redux/Slice/common/common.slice";
import { useDispatch } from "react-redux";
import ToastButton from "../../../Helpers/Toast";
import Model from "../../../Helpers/Model";
import { GameAddApi, GameUpdateApi } from "../../../Service/admin.service";

const GameAdd = ({ show, setShow, updateData }) => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      gamename: updateData?.gameName ? updateData?.gameName : "",
      status: updateData?.isShow ? updateData?.isShow : "",
    },
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};
      if (!values.gamename) {
        errors.gamename = valid_err.GAME_NAME_ERROR;
      }
      if (!values.status) {
        errors.status = valid_err.STATUS_ERROR;
      }
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {

      if (updateData) {
        const data = {
          gameId: updateData?._id,
          gameName: values.gamename,
          isShow: values.status,
        };
        const res = await GameUpdateApi(data, token);
        console.log(res?.response?.data?.msg,"check updated data")
  if (res?.data?.statusCode === 200 ) {
          toast.success(res.data.msg);
          resetForm();
          setShow(false);
          dispatch(getGame(token));
        } else {
          toast.error(res?.response?.data?.msg);
        }


      } else {
        const data = {
          gameName: values.gamename,
          isShow: values.status,
        };
        const res = await GameAddApi(data, token);
        if (res?.data?.statusCode === 201) {
          toast.success(res?.data?.msg);
          setShow(false);
          dispatch(getGame(token));
          resetForm();
        } else {
          toast.error(res?.response?.data?.msg);
        }
      }
    },
  });

  const fields = [
    {
      name: "gamename",
      label: "Game Name",
      type: "text",
      label_size: 12,
      col_size: 12,
    },

    {
      name: "status",
      label: "Status",
      type: "checkbox",
      label_size: 12,
      col_size: 12,
      check_box_true: formik.values.status,
    },
  ];

  return (
    <>
      <Model show={show} setShow={setShow}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {updateData ? "Update Game" : "Add Game"}
            </h5>
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
          <div
            id="withdrawAccountForm"
            method="post"
            action=""
            noValidate="novalidate"
          >
            <div className="modal-body">
              <Formikform
                fieldtype={fields.filter((field) => !field.showWhen)}
                formik={formik}
                btn_name={updateData ? "Update" : "Add"}
              />
              <ToastButton />
            </div>
          </div>
        </div>
      </Model>
    </>
  );
};

export default GameAdd;
