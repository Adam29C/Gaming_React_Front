import React, { useState } from "react";
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
  GameRuleAddApi,
  GameRuleUpdateApi,
} from "../../../Service/superadmin.service";

const GameRuleAdd = () => {
  const token = localStorage.getItem("token");
  const user_details = JSON.parse(localStorage.getItem("user_details"));
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;

  const formik = useFormik({
    initialValues: {
      title: state?.title ? state?.title : "",
      description: state?.description ? state?.description : "",
      status: state?.status ? state?.status : "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.title) {
        errors.title = valid_err.TITLE_ERROR;
      }
      if (!values.description) {
        errors.description = valid_err.DESCRIPTION_ERROR;
      }
      if (!values.status) {
        errors.status = valid_err.STATUS_ERROR;
      }

      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      setDisable(true);
      const apiData = {
        title: values.title,
        description: values.description,
        status: values.status,
        ...(state?._id ? { ruleId: state?._id } : { userId: user_details?.id }),
      };
      console.log(apiData);
      try {
        const res = state?._id
          ? await GameRuleUpdateApi(apiData, token)
          : await GameRuleAddApi(apiData, token);
        console.log(res);
        if (state?._id) {
          if (res?.statusCode === 200) {
            toast.success(res?.msg);
            resetForm();
            setTimeout(() => {
              navigate("/super/rules");
            }, 1000);
            dispatch(getGameRule(token));
          } else if (res?.response?.data?.statusCode === 400) {
            toast.error(res?.response?.data?.msg);
          }
        } else {
          if (res?.statusCode === 201) {
            resetForm();
            toast.success(res?.msg);
            setTimeout(() => {
              navigate("/super/rules");
            }, 1000);
            dispatch(getGameRule(token));
          } else if (res?.response?.data?.statusCode === 400) {
            toast.error(res?.response?.data?.msg);
          }
        }
      } catch (error) {
      } finally {
        setTimeout(() => {
          setDisable(false);
        }, 1000);
      }
    },
  });

  const fields = [
    {
      name: "title",
      label: "Title",
      type: "text",
      label_size: 12,
      col_size: 6,
    },
    {
      name: "description",
      label: "Description",
      type: "msgbox",
      label_size: 12,
      col_size: 6,
      row_size: 7,
    },

    {
      name: "status",
      label: "Status",
      type: "checkbox",
      label_size: 12,

      col_size: 6,
      check_box_true: formik.values.status,
    },
  ];

  return (
    <>
      <Content
        title={state?._id ? "Update Rule" : "Add Rule"}
        Back_Button={true}
        Back__Button_route="/super/rules"
        col_size={12}
      >
        <Formikform
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          btn_name={state?._id ? "Update" : "Add"}
          Disable_Submit={disable}
        />
        <ToastButton />
      </Content>
    </>
  );
};

export default GameRuleAdd;
