import React, { useState, useEffect } from "react";
import Content from "../../Layout/Content/Content1";
import Formikform from "../../Helpers/Form";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import {
  Generate_Token,
  Send_OTP,
  Sign_Up,
  Verify_OTP,
} from "../../Redux/Slice/Auth/auth.slice";
import {
  Name_regex,
  Password_Rejex,
  Mobile_regex,
} from "../../Utils/Valid_Rejex";
import ToastButton from "../../Helpers/Toast";
import OTPInput, { ResendOTP } from "otp-input-react";
import * as valid_err from "../../Utils/Common_Msg";
const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [OTP, setOTP] = useState("");
  const [Token, setToken] = useState("");
  const [ShowOTP, setShowOTP] = useState(false);
  const [Disabled, setDisabled] = useState(false);
  const [DisabledOtp, setDisabledOtp] = useState(false);
  const [OTP_input_Value, set_OTP_input_Value] = useState("");

  const isValidContact = (mobile) => {
    return Mobile_regex(mobile);
  };
  const isValidPassword = (mobile) => {
    return Password_Rejex(mobile);
  };

  const isValidName = (name) => {
    return Name_regex(name);
  };

  const getToken = async () => {
    const request1 = {
            deviceId: v4(),
    };
    const res1 = await dispatch(Generate_Token(request1)).unwrap();
    if (res1.statusCode === 200) {
      setToken(res1.data);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      mobileNumber: "",
      password: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = valid_err.PASSWORD_ERROR;
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
        name: values.name,
        mobileNumber: values.mobileNumber,
        password: values.password,
        otp: OTP,
      };

      await dispatch(Sign_Up({ request: req, token: Token && Token }))
        .unwrap()
        .then((response) => {
          if (response.status === 400) {
            toast.error(response.data.msg);
          } else if (response.status) {
            toast.success(response.msg);
            setTimeout(() => {
              navigate("/");
            }, 1000);
          } else if (!response.status) {
            toast.error(response.msg);
          }
        });
    },
  });

  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      label_size: 12,
      col_size: 12,
      showButton: false,
    },

    {
      name: "password",
      label: "Password",
      type: "password",
      label_size: 12,
      col_size: 12,
      showButton: false,
    },
    {
      name: "mobileNumber",
      label: "Mobile",
      type: "text",
      label_size: 12,
      col_size: 12,
      showButton: true,
    },
  ];

  const Send_Opt_Function = async () => {
    if (!formik.values.name) {
      formik.errors.name = valid_err.PASSWORD_ERROR;
      return;
    } else if (!isValidName(formik.values.name)) {
      formik.errors.name = valid_err.INVALID_ERROR;
      return;
    }

    if (!formik.values.password) {
      formik.errors.password = valid_err.PASSWORD_ERROR;
      return;
    } else if (!isValidPassword(formik.values.password)) {
      formik.errors.password = valid_err.PASSWORD__LENGTH_ERROR;
      return;
    }

    if (!formik.values.mobileNumber) {
      formik.errors.mobileNumber = valid_err.CONTACT_ERROR;
      return;
    } else if (!isValidContact(formik.values.mobileNumber)) {
      formik.errors.mobileNumber = valid_err.INVALID_CONTACT_ERROR;
      return;
    } else {
      const res = await dispatch(
        Send_OTP({
          mobileNumber: formik.values.mobileNumber,
          token: Token && Token,
        })
      ).unwrap();

      if (res.status) {
        toast.success(res.msg);
        setShowOTP(true);
        setDisabled(true);
      } else {
        toast.error(res.msg);
        setDisabled(false);
      }
    }
  };

  const Verify_OTP_Function = async (e) => {
    e.preventDefault();

    if (OTP === "") {
      toast.error("Please Enter OTP");

      return;
    }

    const req = {
      mobileNumber: formik.values.mobileNumber,
      otp: parseInt(OTP),
    };
    const response = await dispatch(
      Verify_OTP({ request: req, token: Token && Token })
    )
      .unwrap()
      .then((response) => {
        if (response.status === 400) {
          toast.error(response.data.msg);
        } else if (response.status) {
          toast.success(response.msg);
          setShowOTP(false);
        } else if (!response.status) {
          toast.error(response.msg);
        }
      });
  };

  const renderButton = (buttonProps) => {
    return (
      <button
        className="btn btn-primary   text-light mx-1"
        {...buttonProps}
        onClick={(e) => {
          e.preventDefault();
          Send_Opt_Function();
        }}
        s
      >
        {buttonProps.remainingTime !== 0
          ? `Resend ${buttonProps.remainingTime} Sec`
          : "Resend"}
      </button>
    );
  };
  const renderTime = () => React.Fragment;

  return (
    <>
      <Content
        title="Sign Up User"
        col_size={7}
        responsive_col={"col-md-8 col-lg-6"}
      >
        <Formikform
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          VerifyMobileN={Send_Opt_Function}
          btn_name="Create My Account "
          button_Size="col-12"
          btn_Class="btn btn-primary btn-block"
          Disable_Button={Disabled}
          additional_field={
            <>
              {ShowOTP ? (
                <>
                  <div className="row  mb-2 d-flex align-items-center justify-content-between">
                    <div className=" col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-6   ">
                      <label className={`col-lg-12`} htmlFor={"VerifyOTP"}>
                        Enter Otp
                        <span className="text-danger">*</span>
                      </label>
                      <OTPInput
                        value={OTP}
                        inputClassName="form-control  px-2 otp_Input"
                        name="VerifyOTP"
                        onChange={setOTP}
                        autoFocus
                        OTPLength={5}
                        otpType="number"
                        disabled={false}
                        // className="col-6 col-sm-12 mb-3 "
                      />
                    </div>
                    <div className=" col-xxl-5 col-xl-5 col-lg-5 col-md-5  col-sm-12  mt-3  d-flex ">
                      <div>
                        <ResendOTP
                          renderButton={renderButton}
                          renderTime={renderTime}
                        />
                      </div>
                      <div>
                        <button
                          className="btn btn-primary"
                          onClick={(e) => Verify_OTP_Function(e)}
                        >
                          Verify
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {formik.errors.title && (
                <div style={{ color: "red" }}>{formik.errors.title}</div>
              )}
            </>
          }
        />

        <p className="text-center my-3 fs-6">
          Already have an account?
          <Link to="/login">&nbsp; Sign in</Link>
        </p>
      </Content>

      <ToastButton />
    </>
  );
};

export default Users;
