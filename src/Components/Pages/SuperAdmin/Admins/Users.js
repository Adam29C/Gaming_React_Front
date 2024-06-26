import React, { useEffect, useState } from "react";
import Content from "../../../Layout/Content/Content";
import Data_Table from "../../../Helpers/Datatable";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {
  GET_ALL_ADMINS,
  REMOVE_ADMINS,
} from "../../../Service/superadmin.service";
import ToastButton from "../../../Helpers/Toast";
import toast from "react-hot-toast";
import { show } from "../../../Utils/Common_Date";
import { Tooltip } from "bootstrap";
import { useDispatch } from "react-redux";
import { fDateTimeSuffix, fa_time } from "../../../Helpers/Date_formet";
import { SUPER_ADMIN_DEACTIVE_USER_API } from "../../../Service/admin.service";

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const token = localStorage.getItem("token");

  const [GetData, setGetData] = useState([]);
  const [ShowEdit, setShowEdit] = useState(false);
  const [isLoading,setIsLoading]=useState(false)
  const getRules = async () => {
    setIsLoading(true)
    const response = await GET_ALL_ADMINS(userId, token);
   
    if (response.statusCode === 200) {
      setGetData(response.list);
      setIsLoading(false)
    } else {
      toast.error(response.msg);
      
    }
  };

  useEffect(() => {
    getRules();
  }, []);

  const columns = [
    {
      name: "Title",
      selector: (row) => row.name,
    },
    {
      name: "Mobile Number",
      selector: (row) => row.mobileNumber,
    },
    {
      name: "Is Verified",
      selector: (row) => (
        <span
          className={`${
            row.isVerified ? "bg-success" : "bg-danger"
          } px-3 rounded-3 text-light py-1 text-center`}
        >
          {row.isVerified ? "Verified" : "Not Verified"}
        </span>
      ),
    },
    {
      name: "Active/Deactive",
      selector: (row) => (
        <>
          <Form.Check
            type="switch"
            id="custom-switch"
            defaultChecked={row?.isActive}
            onChange={(e) =>
              handleStatusUpdate(e.target.checked, row?.subAdminId)
            }
            className="custom-switch m-l-0"
          />
        </>
      ),
    },
    {
      name: "Create At",
      selector: (cell) => (
        <span data-toggle="tooltip" data-placement="top" title="Edit">
          {cell?.createdAt ? fa_time(cell?.createdAt) : " _ "}
        </span>
      ),
    },
    {
      name: "actions",
      selector: (cell, row) => (
        <div style={{ width: "120px" }}>
          <div>
            {ShowEdit ? (
              <Link to={`/super/user/add`} state={cell}>
                <span data-toggle="tooltip" data-placement="top" title="Edit">
                  <i class="ti-marker-alt fs-5 mx-1"></i>
                </span>
              </Link>
            ) : (
              ""
            )}

            <Link>
              <span
                data-toggle="tooltip"
                data-placement="top"
                title="Delete"
                onClick={() => RemoveUsers(cell?.subAdminId)}
              >
                <i class="ti-trash fs-5 mx-1"></i>
              </span>
            </Link>
          </div>
        </div>
      ),
    },
  ];




  const RemoveUsers = async (id) => {
    let data ={
      adminId: userId,
       id: id 
    }
    const confirmed = window.confirm("Do You Really Want To Remove This Admin");
    if (confirmed) {
      const response = await (
        REMOVE_ADMINS(data, token)
      );

      if (response?.statusCode == 200) {
        toast.success(response?.msg);
        getRules();
      } else {
        toast.error(response.msg);
      }
    } else {
    }
  };

  const handleStatusUpdate = async (value, id) => {
    
    let data = {
      adminId: userId,
      id: id,
      isActive: value,
    };

    const response = await SUPER_ADMIN_DEACTIVE_USER_API(data, token);
    if (response?.statusCode === 200) {
      toast.success(response.msg);
     
    } else {
      toast.error(response.msg);
    }
  };

  const handleAdd = () => {
    navigate("/super/user/add");
  };
  

  return (
    <>
      <Content
        title="Admins"
        col_size={12}
        addtitle="Add User"
        handleAdd={handleAdd}
      >
        <Data_Table columns={columns} data={GetData && GetData} isLoading={isLoading} />
      </Content>
      <ToastButton />
    </>
  );
};

export default Users;

export const tooltip = (
  <Tooltip id="tooltip">
    <strong>Holy guacamole!</strong> Check this info.
  </Tooltip>
);
