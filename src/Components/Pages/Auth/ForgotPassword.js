import React, { useState, useEffect } from "react";
import Content from "../../Layout/Content/Content1";
import Formikform from "../../Helpers/Form";
import * as valid_err from "../../Utils/Common_Msg";
import {
  Name_regex,
  Password_Rejex,
  Mobile_regex,
} from "../../Utils/Valid_Rejex";
import { useFormik } from "formik";
import OTPInput, { ResendOTP } from "otp-input-react";
import {
  Verify_OTP,
  Forget_Password_Link,
  Verify_Forget_Password_Link,
} from "../../Redux/Slice/Auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import ToastButton from "../../Helpers/Toast";
import { Link, useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [OTP, setOTP] = useState("");
  const [ShowOTP, setShowOTP] = useState(false);
  const [DisabledSendOtp, setDisabledSendOtp] = useState(false);
  const [DisabledVerifyOtp, setDisabledVerifyOtp] = useState(false);

  const [ShowPassword, setShowPasswordInput] = useState(false);

  const isValidContact = (mobile) => {
    return Mobile_regex(mobile);
  };

  const isValidPassword = (mobile) => {
    return Password_Rejex(mobile);
  };

  const formik = useFormik({
    initialValues: {
      mobileNumber: "",
      password: "",
    },

    validate: (values) => {
      const errors = {};

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
    onSubmit: async (values) => {
      const req = {
        mobileNumber: parseInt(values.mobileNumber),
        password: values.password,
        otp: OTP,
      };

      await dispatch(Verify_Forget_Password_Link(req))
        .unwrap()
        .then((response) => {
          if (response.status === 409) {
            toast.error(response.data.msg);
          } else if (response.status) {
            toast.success(response.msg);
            setTimeout(() => {
              navigate("/");
            }, 2000);
          } else if (!response.status) {
            toast.error(response.msg);
          }
        });
    },
  });

  const fields = [
    {
      name: "mobileNumber",
      label: "Mobile Number",
      type: "text",
      label_size: 12,
      col_size: 12,
      showButton: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      label_size: 12,
      col_size: 12,
      showButton: false,
      showWhen: !ShowPassword,
    },
  ];

  const Send_Opt_Function = async () => {
    if (!formik.values.mobileNumber) {
      formik.errors.mobileNumber = valid_err.CONTACT_ERROR;
      return;
    } else if (!isValidContact(formik.values.mobileNumber)) {
      formik.errors.mobileNumber = valid_err.INVALID_CONTACT_ERROR;
      return;
    } else {
      const res = await dispatch(
        Forget_Password_Link({
          mobileNumber: formik.values.mobileNumber,
        })
      ).unwrap();
      if (res.status) {
        toast.success(res.msg);
        // setShowOTP(true);
        setShowPasswordInput(true);
        setDisabledSendOtp(true);
      } else {
        toast.error(res.msg);
        setDisabledSendOtp(false);
        setShowPasswordInput(false);
      }
    }
  };

  const Verify_OTP_Function = async (e) => {
    e.preventDefault();

    if (OTP === "") {
      toast.error("Please Enter OTP");
      return;
    }

    const response = await dispatch(
      Verify_OTP({
        mobileNumber: parseInt(formik.values.mobileNumber),
        otp: parseInt(OTP),
        isForgot: true,
      })
    )
      .unwrap()
      .then((response) => {
        if (response.status === 400) {
          toast.error(response.data.msg);
        } else if (response.status) {
          toast.success(response.msg);
          setShowOTP(true);
          setDisabledVerifyOtp(true);
          setShowPasswordInput(true);
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
      <Content title="Forget Password" responsive_col={"col-md-6 col-lg-6"}>
        <Formikform
          button_Size="col-12"
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          Disable_Button={DisabledSendOtp}
          VerifyMobileN={Send_Opt_Function}
          btn_name="Update Password"
          after_password_field={
            <>
              {ShowPassword ? (
                <>
                  <div className="row  mb-2 d-flex align-items-center justify-content-between">
                    <div className=" col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-6   ">
                      <label className={`col-lg-12`} htmlFor={"VerifyOTP"}>
                        Enter Otp
                        <span className="text-danger">*</span>
                      </label>
                      <OTPInput
                        value={OTP}
                        inputClassName="form-control px-2  otp_Input"
                        name="VerifyOTP"
                        onChange={setOTP}
                        autoFocus
                        OTPLength={5}
                        otpType="number"
                        disabled={false}
                      />
                    </div>
                    <div className=" col-xxl-5 col-xl-5 col-lg-5 col-md-6  col-sm-12  mt-3  d-flex ">
                      <div>
                        <ResendOTP
                          renderButton={renderButton}
                          renderTime={renderTime}
                        />
                      </div>
                      <div>
                        <button
                          style={{ background: "#4e3897" }}
                          className="btn btn-primary"
                          onClick={(e) => Verify_OTP_Function(e)}
                          disabled={DisabledVerifyOtp}
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
          after_submit_button={
            <div>
              <Link
                style={{ background: "#4e3897" }}
                className="btn btn-primary  col-12 mt-1"
                // onClick={(e) => Verify_OTP_Function(e)}
                to="/login"
              >
                Back To Login
              </Link>
            </div>
          }
        />
        <ToastButton />
      </Content>
    </>
  );
};

export default ForgetPassword;
