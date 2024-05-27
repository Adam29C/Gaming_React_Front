import React from "react";
import Content from "../../../Layout/Content/Content";
import Formikform from "../../../Helpers/Form";
import { useFormik } from "formik";
import * as valid_err from "../../../Utils/Common_Msg";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getGameRule } from "../../../Redux/Slice/common/common.slice";
import { useDispatch } from "react-redux";
import ToastButton from "../../../Helpers/Toast";
import { ADD_ADMIN_ACCOUNT_DETAILS } from "../../../Service/superadmin.service";

const GameRuleAdd = () => {
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;

  console.log("state?.bankName", state);
  const formik = useFormik({
    initialValues: {
      upiId: state?.upiId ? state?.upiId : "",
      upiName: state?.upiName ? state?.upiName : "",
      image: state?.barCodeImage ? state?.barCodeImage : "",
      accountNumber: state?.accountNumber ? state?.accountNumber : "",
      accountHolderName: state?.accountHolderName
        ? state?.accountHolderName
        : "",
      ifscCode: state?.ifscCode ? state?.ifscCode : "",
      bankName: state?.bankName ? state?.bankName : "",
      isBank: state?.isBank ? state?.isBank : "" ,
    },

    validate: (values) => {
      // const errors = {};
      // if (!values.title) {
      //   errors.title = valid_err.TITLE_ERROR;
      // }
      // if (!values.description) {
      //   errors.description = valid_err.DESCRIPTION_ERROR;
      // }
      // if (!values.status) {
      //   errors.status = valid_err.STATUS_ERROR;
      // }
      // return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      let formData = new FormData();
      formData.append("id", userId);
      formData.append("isBank", values.isBank === "true");
      formData.append("image", values.image);
      formData.append("minAmount", values.minAmount);
      formData.append("maxAmount", values.maxAmount);

      if (values.isBank === "true") {
        formData.append("bankName", values.bankName);
        formData.append("accountHolderName", values.accountHolderName);
        formData.append("accountNumber", values.accountNumber);
        formData.append("ifscCode", values.ifscCode);
      } else {
        formData.append("upiName", values.upiName);
        formData.append("upiId", values.upiId);
      }

      const res = await ADD_ADMIN_ACCOUNT_DETAILS(formData, token);
      console.log(res, "check res");
      if (res?.statusCode === 200 || 201) {
        toast.success(res?.msg);
        resetForm();
        setTimeout(() => {
          navigate("/super/bankdetails");
        }, 2000);
      } else {
        toast.error(res?.msg);
      }

      // Log FormData contents for debugging
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

    
    },
  });

  const fields = [
    {
      name: "isBank",
      label: "Account Type",
      type: "select",
      label_size: 12,
      col_size: 6,
      options: [
        { label: "UPI", value: false },
        { label: "Bank Account", value: true },
      ],
    },
    {
      name: "bankName",
      label: "Bank Name",
      type: "text",
      label_size: 12,
      col_size: 6,
      showWhen: (values) => values.isBank && values.isBank === "true",
    },
    {
      name: "accountHolderName",
      label: "Account Holder Name",
      type: "text",
      label_size: 12,
      col_size: 6,
      showWhen: (values) => values.isBank && values.isBank === "true",
    },

    {
      name: "accountNumber",
      label: "A/C Number",
      type: "text",
      label_size: 12,
      col_size: 6,
      showWhen: (values) => values.isBank && values.isBank === "true",
    },

    {
      name: "ifscCode",
      label: "IFSC Number",
      type: "text",
      label_size: 12,
      col_size: 6,
      showWhen: (values) => values.isBank && values.isBank === "true",
    },

    {
      name: "upiName",
      label: "UPI Name",
      type: "text",
      label_size: 12,
      col_size: 6,
      showWhen: (values) => values.isBank && values.isBank === "false",
    },
    {
      name: "upiId",
      label: "UPI Id",
      type: "text",
      label_size: 12,
      col_size: 6,
      showWhen: (values) => values.isBank && values.isBank === "false",
    },
    {
      name: "image",
      label:
        formik.values.isBank && formik.values.isBank === "false"
          ? "QR Code"
          : "Somthing Else",
      type: "file",
      label_size: 12,
      col_size: 6,
    },
    {
      name: "minAmount",
      label: "Min Amount",
      type: "text",
      label_size: 12,
      col_size: 6,
    },
    {
      name: "maxAmount",
      label: "Max Amount",
      type: "text",
      label_size: 12,
      col_size: 6,
    },
  ];

  return (
    <>
      <Content
        title={state?._id ? "Update Bank" : "Add Bank"}
        Back_Button={true}
        Back__Button_route="/super/bankdetails"
        col_size={12}
      >
        <Formikform
          fieldtype={fields.filter(
            (field) => !field.showWhen || field.showWhen(formik.values)
          )}
          formik={formik}
          btn_name={state?._id ? "Update Bank" : "Add Bank"}
        />
        <ToastButton />
      </Content>
    </>
  );
};

export default GameRuleAdd;
