import React, { useEffect, useState } from "react";
import Content from "../../../Layout/Content/Content";
import Data_Table from "../../../Helpers/Datatable";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { SUPER_ADMIN_DEACTIVE_USER_API } from "../../../Service/admin.service";
import {
  SIGN_UP_USERLIST,
  REMOVE_ADMINS,
} from "../../../Service/superadmin.service";
import ToastButton from "../../../Helpers/Toast";
import toast from "react-hot-toast";
import { show } from "../../../Utils/Common_Date";
import { Tooltip } from "bootstrap";
import { useDispatch } from "react-redux";
import { fDateTimeSuffix, fa_time } from "../../../Helpers/Date_formet";
import Date_picker from "../../../Helpers/Date_picker";

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const token = localStorage.getItem("token");

  const [GetData, setGetData] = useState([]);
  const [ShowEdit, setShowEdit] = useState(false);
  const [isLoading,setIsLoading]=useState(false)
  const [selectDate, setSelectDate] = useState(null);
  const [verified, setVerified] = useState("all");
  const [selectStatus, setSelectStatus] = useState("all");
  const [filteredData, setFilteredData] = useState([]);


  const getRules = async () => {
    setIsLoading(true)
    const response = await SIGN_UP_USERLIST(userId, token);

    if (response.statusCode == 200) {
      setGetData(response.data);
      setFilteredData(response.data)
      setIsLoading(false)
    } else {
      toast.error(response.msg);
    }
  };

  useEffect(() => {
    getRules();
  }, []);

    
  useEffect(() => {
    let tempData = GetData;
    let verifiedState = verified == "verified" ? true :  verified == "not Verified" ? false : "all"
    let selectStatusState = selectStatus == "active" ? true :  selectStatus == "deactive" ? false : "all"
    
    console.log(selectStatusState)

    if (verifiedState !== "all") {
      tempData = tempData?.filter(row => row?.isVerified  === verifiedState);
    }

    if (selectStatusState !== "all") {
      tempData = tempData?.filter(row =>row?.isActive === selectStatusState);
    }

    if (selectDate) {
      const selectedDate = fa_time(selectDate)
      tempData = tempData?.filter(row => {
        const rowDate = fa_time(row?.createdAt)
        return rowDate === selectedDate;
      });
    }

    setFilteredData(tempData);
  }, [verified,selectDate,selectStatus, GetData]);

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
            // defaultChecked={row?.isActive && row?.isActive}
             checked={row?.isActive}
            onChange={(e) =>
              handleStatusUpdate(e.target.checked, row?.userId)
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
          {fa_time(cell?.createdAt)}
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
                onClick={() => RemoveUsers(row.subAdminId)}
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
    const confirmed = window.confirm("Do You Really Want To Remove This User");
    if (confirmed) {
      const response = await dispatch(
        REMOVE_ADMINS({ adminId: userId, id: id }, token)
      );

      if (response?.data?.statusCode == 200) {
        toast.success(response?.data?.msg);
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
        title="Users"
        col_size={12}
        // addtitle="Add User"
        // handleAdd={handleAdd}
      >
        <div className="d-flex  mt-2 payment_history">
        <div className="d-flex mr-2">
          <h6 className="m-2">verified:</h6>
          <select
            className="form-select custom-select"
            aria-label="Default select example"
            selected={"all"}
            onChange={(e) => setVerified(e.target.value)}
          >
            <>
              <option value="all">All</option>
              <option value="verified">verified</option>
              <option value="not Verified">not Verified</option>
            </>
          </select>
        </div>
        <div className="d-flex mr-2">
          <h6 className="m-2">Status:</h6>
          <select
            className="form-select custom-select"
            aria-label="Default select example"
            selected={"all"}
            onChange={(e) => setSelectStatus(e.target.value)}
          >
            <>
              <option value="all">All</option>
              <option value="active">active</option>
              <option value="deactive">deactive</option>
            </>
          </select>
        </div>
        <Date_picker selectDate={selectDate} setSelectDate={setSelectDate} />
      </div>
        <Data_Table  showFilter={false} isLoading={isLoading} columns={columns} data={filteredData && filteredData} />
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
