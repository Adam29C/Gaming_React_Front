import React, { useState, useEffect } from "react";
// import Withdraw from "./Withdraw";
import Model from "../../../../../Helpers/Model";
import { useFormik } from "formik";
import Formikform from "../../../../../Helpers/Form";
import {
  CreateWithdrawPassword,
  SendOtpForResetPassword,
} from "../../../../../Service/user.service";
import { useDispatch, useSelector } from "react-redux";
import ToastButton from "../../../../../Helpers/Toast";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Mobile_regex } from "../../../../../Utils/Valid_Rejex";
import * as valid_err from "../../../../../Utils/Common_Msg";
import OTPInput, { ResendOTP } from "otp-input-react";

const WithdrawModel = ({ show, setShow }) => {
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const token = localStorage.getItem("token");

  const [OTP, setOTP] = useState("");
  const [ShowOTP, setShowOTP] = useState(false);
  const [DisabledUpdate, setDisabledUpdate] = useState(true);

  const isValidContact = (mobile) => {
    return Mobile_regex(mobile);
  };

  const formik = useFormik({
    initialValues: {
      mobileNumber: "",
      newpassword: "",
      confirmpassword: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.mobileNumber) {
        errors.mobileNumber = valid_err.CONTACT_ERROR;
      } else if (!isValidContact(values.mobileNumber)) {
        errors.mobileNumber = valid_err.INVALID_CONTACT_ERROR;
      }

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
        mobileNumber: values.mobileNumber,
        otp: OTP,
        // userId: userId,
        password: values.newpassword,
      };

      const response = await SendOtpForResetPassword(req, token);


      if (response.status === 409) {
        toast.error(response.data.msg);
      } else if (response.statusCode == 200) {
        toast.success(response.msg);
        setTimeout(() => {
          setShow(false);
        }, 1000);
      } else if (!response.status) {
        toast.error(response.msg);
      }
    },
  });

  const fields = [
    {
      name: "mobileNumber",
      label: "Registered Mobile Number",
      type: "text",
      label_size: 12,
      col_size: 12,
      showButton: true,
    },
    {
      name: "newpassword",
      label: "New Password",
      type: "password",
      label_size: 12,
      col_size: 12,
      showButton: false,
      showWhen: (values) => ShowOTP && ShowOTP,
    },
    {
      name: "confirmpassword",
      label: "Confirm Password",
      type: "password",
      label_size: 12,
      col_size: 12,
      showButton: false,
      showWhen: (values) => ShowOTP && ShowOTP,
    },
  ];

  //  Send Otp -

  const Send_Opt_Function = async () => {
    if (formik.values.mobileNumber === "") {
      formik.errors.mobileNumber = valid_err.CONTACT_ERROR;
    } else if (!isValidContact(formik.values.mobileNumber)) {
      formik.errors.mobileNumber = valid_err.INVALID_CONTACT_ERROR;
    } else {
      const req = { mobileNumber: formik.values.mobileNumber };
      const response = await SendOtpForResetPassword(req, token);

      if (response.statusCode === 200) {
        toast.success(response.msg);
        setDisabledUpdate(false);
        setShowOTP(true);
      } else {
        toast.error(response.response.data.msg);
        formik.resetForm();
      }
    }
  };

  const renderButton = (buttonProps) => {
    return (
      <button
        className="btn btn-primary   text-light mx-1"
        {...buttonProps}
        onClick={(e) => {
          e.preventDefault();
          // Send_Opt_Function();
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
      <Model show={show} setShow={setShow} centered={true} modal_size="md">
        <div className="modal-header">
          <h5 className="modal-title">Reset Withdraw Password</h5>
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
            fieldtype={fields.filter(
              (field) => !field.showWhen || field.showWhen(formik.values)
            )}
            formik={formik}
            VerifyMobileN={Send_Opt_Function}
            btn_name="Update Password"
            button_Size="col-12"
            btn_Class="btn btn-primary btn-block"
            Disable_Submit={DisabledUpdate}
            after_text_field={
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
                        {/* <div> */}
                        <ResendOTP
                          renderButton={renderButton}
                          renderTime={renderTime}
                        />
                        {/* </div> */}
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
        </div>

        <ToastButton />
      </Model>
    </>
  );
};

export default WithdrawModel;
