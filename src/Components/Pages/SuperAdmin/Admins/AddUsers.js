import React, { useState } from "react";
import Content from "../../../Layout/Content/Content";
import Formikform from "../../../Helpers/Form";
import { useFormik } from "formik";
import {
  Mobile_regex,
  Name_regex,
  Password_Rejex,
} from "../../../Utils/Valid_Rejex";
import * as valid_err from "../../../Utils/Common_Msg";
import { ADD_ADMINS } from "../../../Service/superadmin.service";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import ToastButton from "../../../Helpers/Toast";
import { useLocation, useNavigate } from "react-router-dom";
const Add_User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;

  const [Permisstion, setPermisstion] = useState({
    gameCreated: false,
    gameEdit: false,
    gameDelete: false,
    viewGame: false,
    createUser: false,
    viewUser: false,
  });

  const isValidContact = (mobile) => {
    return Mobile_regex(mobile);
  };
  const isValidPassword = (mobile) => {
    return Password_Rejex(mobile);
  };
  const isValidName = (name) => {
    return Name_regex(name);
  };

  const formik = useFormik({
    initialValues: {
      mobileNumber: "",
      password: "",
      name: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = valid_err.FULLNAME_ERROR;
      } else if (!isValidName(values.name)) {
        errors.name = valid_err.INVALID_ERROR;
      }
      if (!values.password) {
        errors.password = valid_err.PASSWORD_ERROR;
      } else if (!isValidPassword(values.password)) {
        errors.password = valid_err.PASSWORD__LENGTH_ERROR;
      }
      if (!values.mobileNumber) {
        errors.mobileNumber = valid_err.CONTACT_ERROR;
      } else if (!isValidContact(values.mobileNumber)) {
        errors.mobileNumber = valid_err.INVALID_CONTACT_ERROR;
      }

      return errors;
    },
    onSubmit: async (values) => {
      const req = {
        mobileNumber: values.mobileNumber,
        password: values.password,
        name: values.name,
        role: 1,
        permission1: Permisstion,
        adminId: userId,
      };

      const response = await ADD_ADMINS(req, token);

      if (response.status === 409) {
        toast.error(response.data.msg);
      } else if (response.status) {
        toast.success(response.msg);
        setTimeout(() => {
          navigate("/super/users");
        }, 1000);
      } else if (!response.status) {
        toast.error(response.msg);
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
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      label_size: 12,
      col_size: 6,
    },
  ];

  const permisstionArray = [
    {
      id: 0,
      name: "Game Create",
      value: "gameCreated",
    },
    {
      id: 1,
      name: "Edit Game ",
      value: "gameEdit",
    },
    {
      id: 2,
      name: "Delete Game",
      value: "gameDelete",
    },
    {
      id: 3,
      name: "View Game",
      value: "viewGame",
    },
    {
      id: 4,
      name: "Create User",
      value: "createUser",
    },
    {
      id: 5,
      name: "View Users",
      value: "viewUser",
    },
  ];

  const handleSBrokerChange = (e, checked) => {
    setPermisstion((prevValue) => ({
      ...prevValue,
      [e]: checked,
    }));
  };

  return (
    <>
      <Content
        title={"Add Admin"}
        col_size={12}
        Back_Button={true}
        Back__Button_route="/super/users/"
      >
        <Formikform
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          btn_name={state?.name ? "Update " : "Add"}
          before_submit={
            <>
              <h5 className="fw-bold"> Permissions </h5>
              {permisstionArray.map((broker) => (
                <div className={`col-lg-4 mt-2`}>
                  <div className="row ">
                    <div className="col-lg-12 ">
                      <div class="form-check custom-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name={broker.name}
                          value={broker.id}
                          onChange={(e) =>
                            handleSBrokerChange(broker.value, e.target.checked)
                          }
                        />
                        <label className="form-check-label" for={broker.name}>
                          {broker.name}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          }
        />
        <ToastButton />
      </Content>
    </>
  );
};

export default Add_User;
