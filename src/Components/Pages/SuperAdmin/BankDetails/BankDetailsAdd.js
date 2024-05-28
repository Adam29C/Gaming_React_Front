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
import {
  ADD_ADMIN_ACCOUNT_DETAILS,
  UPDATE_ADMIN_ACCOUNT_DETAILS,
} from "../../../Service/superadmin.service";
import { No_Negetive_Input_regex } from "../../../Utils/Valid_Rejex";
const GameRuleAdd = () => {
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;

  const formik = useFormik({
    initialValues: {
      upiId: state?.upiId ? state?.upiId : "",
      upiName: state?.upiName ? state?.upiName : "",
      image: state?.barCodeImage
        ? state?.barCodeImage
        : state?.bankImage
        ? state?.bankImage
        : "",
      accountNumber: state?.accountNumber ? state?.accountNumber : "",
      accountHolderName: state?.accountHolderName
        ? state?.accountHolderName
        : "",
      ifscCode: state?.ifscCode ? state?.ifscCode : "",
      bankName: state?.bankName ? state?.bankName : "",
      isBank: state?.isBank ? state?.isBank : "",
      minAmount: state?.minAmount ? state?.minAmount : "",
      maxAmount: state?.maxAmount ? state?.maxAmount : "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.isBank) {
        errors.isBank = valid_err.EMPTY_SELECT_BANK_ERROR;
      }
      if (values.isBank === "false") {
        if (values.image === "") {
          errors.image = valid_err.EMPTY_IMAGE_ERROR;
        }
        if (values.upiName === "") {
          errors.upiName = valid_err.EMPTY_UPI_NAME_ERROR;
        }
        if (values.upiId === "") {
          errors.upiId = valid_err.EMPTY_UPI_ERROR;
        }
      } else if (values.isBank === "true") {
        if (values.accountNumber === "") {
          errors.accountNumber = valid_err.EMPTY_ACOUNT_HOLDER_NAME_ERROR;
        }
        if (values.accountHolderName === "") {
          errors.accountHolderName = valid_err.EMPTY_UPI_ERROR;
        }
        if (values.ifscCode === "") {
          errors.ifscCode = valid_err.EMPTY_BANK_IFSC_ERROR;
        }
        if (values.bankName === "") {
          errors.bankName = valid_err.EMPTY_BANK_NAME_ERROR;
        }
      }
      if (!values.minAmount) {
        errors.minAmount = valid_err.MIN_AMOUNT_ERROR;
      } else if (!No_Negetive_Input_regex(values.minAmount)) {
        errors.minAmount = valid_err.AMOUNT_GRATER_ZERO_ERROR;
      }
      if (!values.maxAmount) {
        errors.maxAmount = valid_err.MAX_AMOUNT_ERROR;
      } else if (!No_Negetive_Input_regex(values.maxAmount)) {
        errors.maxAmount = valid_err.AMOUNT_GRATER_ZERO_ERROR;
      } else if (parseInt(values.minAmount) > parseInt(values.maxAmount)) {
        errors.maxAmount = valid_err.AMOUNT_MIN_GRATER_MAX_ERROR;
      }

      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      let formData = new FormData();

      formData.append("isBank", values.isBank === "true");
      formData.append("image", values.image);
      formData.append("minAmount", values.minAmount);
      formData.append("maxAmount", values.maxAmount);

      if (state) {
        formData.append("adminId", userId);
        formData.append("id", state._id);
      } else {
        formData.append("id", userId);
      }
      if (values.isBank === "true") {
        formData.append("bankName", values.bankName);
        formData.append("accountHolderName", values.accountHolderName);
        formData.append("accountNumber", values.accountNumber);
        formData.append("ifscCode", values.ifscCode);
      } else {
        formData.append("upiName", values.upiName);
        formData.append("upiId", values.upiId);
      }
      let res;
      if (state) {
        res = await UPDATE_ADMIN_ACCOUNT_DETAILS(formData, token);
      } else {
        res = await ADD_ADMIN_ACCOUNT_DETAILS(formData, token);
      }

      if (res?.statusCode === 200 || 201) {
        toast.success(res?.msg);
        resetForm();
        setTimeout(() => {
          navigate("/super/bankdetails");
        }, 2000);
      } else {
        toast.error(res?.msg);
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
