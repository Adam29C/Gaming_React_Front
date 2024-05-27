import React from "react";
import Formikform from "../../../Helpers/Form";
import * as valid_err from "../../../Utils/Common_Msg";
import { useFormik } from "formik";
import ToastButton from "../../../Helpers/Toast";
import { ChangePasswordApi } from "../../../Service/admin.service";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const token = localStorage.getItem("token");
  const user_details = JSON.parse(localStorage.getItem("user_details"))
  
  const formik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.old_password) {
        errors.old_password = valid_err.OLD_PASSWORD_ERROR;
      }

      if (!values.new_password) {
        errors.new_password = valid_err.NEW_PASSWORD_ERROR;
      }

      if (!values.confirm_password) {
        errors.confirm_password = valid_err.CONFIRM_PASSWORD_ERROR;
      } else if (values.confirm_password !== values.new_password) {
        errors.confirm_password = valid_err.CONFIRM_AND_NEW_PASSWORD_ERROR;
      }

      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const data = {
          user_id:user_details?.id,
          old_password: values.old_password,
          new_password: values.new_password,
        };

        const response = await ChangePasswordApi(data, token);
        if (response?.status == 200) {
          toast.success(response?.data?.msg);
          resetForm()
        }
        else if(response.response.data.statusCode === 400){
          toast.error(response.response.data.msg);
        }
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  const fields = [
    {
      name: "old_password",
      label: "Old Password",
      type: "password",
      label_size: 12,
      col_size: 12,
    },
    {
      name: "new_password",
      label: "New Password",
      type: "password",
      label_size: 12,
      col_size: 12,
    },
    {
      name: "confirm_password",
      label: "Confirm Password",
      type: "password",
      label_size: 12,
      col_size: 12,
    },
  ];

  return (
    <>
      <div className=" card col-12 col-md-6 d-flex justify-content-center align-items-center">
        <h1 className="change-pass-title my-3">Change Password</h1>
        <Formikform
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          btn_name="Update"
        />
        <ToastButton />
      </div>
    </>
  );
};

export default ChangePassword;
