import React, { useState } from 'react'
import Formikform from "../../../../../../Helpers/Form";
import { useFormik } from "formik";
import { ACCOUNT_ADD_CREDIT_REQUEST } from '../../../../../../Service/common.service';
import toast from 'react-hot-toast';
import ToastButton from '../../../../../../Helpers/Toast';
import * as valid_err from "../../../../../../Utils/Common_Msg";
import { useNavigate } from 'react-router-dom';
import { Image_Regexp } from '../../../../../../Utils/Valid_Rejex';

const TransactionInfo = ({amount,displayData,setAmount,}) => {
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const navigate = useNavigate()
console.log(amount,"amount")

const isValidImage = (value) => {
  return Image_Regexp(value);
};

  const formik = useFormik({
    initialValues: {
      utr: "",
      image: "",
      isBank: displayData?.isBank === "true" ? "true" : "false" ,
      amount:amount ? amount : "",
      status:""
    },

    validate: (values) => {

      const errors = {};

      if (!values.utr) {
        errors.utr = valid_err.UTR_ERROR;
      }

      if (!values.image) {
        errors.image = valid_err.UPLOAD_IMAGE_ERROR;
      }
      if(!isValidImage(values.image)){
errors.image = valid_err.UPLOAD_IMAGE_VALID
      }
      // else if(!isValidImage(values.image))(
      //   errors.image = valid_err.UPLOAD_IMAGE_VALID;
      // )

      if (!values.status) {
        errors.status = valid_err.TERMS_AND_CONDTION;
      }

      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
console.log(resetForm)
console.log(values)
      setAmount("")
      try {
        let formData = new FormData();
        formData.append("userId", userId);

        formData.append("utr", values.utr);
        formData.append("image", values.image);
        formData.append("amount", amount);
        formData.append("isBank", values.isBank );
        const response = await ACCOUNT_ADD_CREDIT_REQUEST(formData, token);


        if (response?.statusCode == 200) {
          console.log(response?.statusCode,"response?.statusCode")
          toast.success(response?.msg);
          resetForm()
        
          setAmount("")
          setTimeout(()=>{
navigate("/")
          },2000)
        }
        else {
          toast.error(response.message);
        }
      } catch (error) {
        toast.error(error.message);

      }
    },
  });
  console.log(formik.values,"formik values")
  const fields = [
    {
      name: "utr",
      label: "Unique Transaction Reference",
      type: "text",
      label_size: 12,
      col_size: 12,
    },
    {
      name: "image",
      label: "Upload Your Payment Proof",
      type: "file",
      label_size: 12,
      col_size: 12,
      
    },
    {
      name: "amount",
      label: "Amount",
      type: "number",
      label_size: 12,
      col_size: 12,
      disable:true
    },
    {
      name: "status",
      label: "I have read and agree with the terms of payment and withdrawal policy.",
      type: "checkbox",
      label_size: 12,
      col_size: 12,
      // check_box_true: formik.values.status,
    },
  ];
  return (
    <div className="col-md-6">

       <Formikform
        fieldtype={fields.filter((field) => !field.showWhen)}
        formik={formik}
        btn_name="Submit"
        btn_design
      />
       <ToastButton />
  </div>
  )
}

export default TransactionInfo