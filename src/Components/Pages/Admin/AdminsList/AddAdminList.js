import React, { useState } from "react";
import Content from "../../../Layout/Content/Content";
import Formikform from "../../../Helpers/Form";
import { useFormik } from "formik";
import * as valid_err from "../../../Utils/Common_Msg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ToastButton from "../../../Helpers/Toast";
import { Mobile_regex, Password_Rejex } from "../../../Utils/Valid_Rejex";
import { SUB_ADMIN_CREATED_USER } from "../../../Service/admin.service";

const AddAdminList = () => {
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const role = JSON.parse(localStorage.getItem("roles"));
  const [disable, setDisable] = useState(false);

  const navigate = useNavigate();

  const isValidContact = (mobile) => {
    return Mobile_regex(mobile);
  };

  const isValidPassword = (password) => {
    return Password_Rejex(password);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      mobileNumber: "",
      password: "",
      confirm_password: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = valid_err.TITLE_ERROR;
      }
      if (!values.mobileNumber) {
        errors.mobileNumber = valid_err.CONTACT_ERROR;
      } else if (!isValidContact(values.mobileNumber)) {
        errors.mobileNumber = valid_err.INVALID_CONTACT_ERROR;
      }
      if (!values.password) {
        errors.password = valid_err.PASSWORD_ERROR;
      } else if (!isValidPassword(values.password)) {
        errors.password = valid_err.PASSWORD__LENGTH_ERROR;
      }

      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      setDisable(true);
      try {
        const data = {
          role: role,
          mobileNumber: values.mobileNumber,
          name: values.name,
          password: values.password,
          subAdminId: userId,
        };

        const res = await SUB_ADMIN_CREATED_USER(data, token);

        if (res?.status === 201 || 200) {
          toast.success(res?.data?.msg);
          setTimeout(() => {
            navigate("/admin/userlist");
          }, 2000);
        } else {
          toast.error(res?.response?.data?.msg || "An error occurred.");
        }
      } catch (error) {
        toast.error("An error occurred: " + error.message);
      } finally {
        setTimeout(() => {
          setDisable(false);
        }, 1000);
      }
    },
  });

  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      label_size: 12,
      col_size: 6,
    },
    {
      name: "mobileNumber",
      label: "Mobile Number",
      type: "text",
      label_size: 12,
      col_size: 6,
      row_size: 10,
    },

    {
      name: "password",
      label: "Password",
      type: "password",
      label_size: 12,
      col_size: 6,
    },
  ];

  return (
    <>
      <Content
        title="Add User"
        Back_Button={true}
        Back__Button_route="/admin/userlist"
        col_size={12}
      >
        <Formikform
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          btn_name="Add"
          Disable_Submit={disable}
        />
        <ToastButton />
      </Content>
    </>
  );
};

export default AddAdminList;
