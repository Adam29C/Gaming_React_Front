import React, { useEffect, useState } from "react";
import Content from "../../../Layout/Content/Content";
import Data_Table from "../../../Helpers/Datatable";
import { useLocation } from "react-router-dom";
import ToastButton from "../../../Helpers/Toast";
import {
  GET_CREDIT_WITHDRWAL_REQUEST,
  UPDATE_CREDIT_WITHDRWAL_REQUEST,
} from "../../../Service/superadmin.service";
import { fa_time } from "../../../Helpers/Date_formet";
import Model from "../../../Helpers/Model";
import toast from "react-hot-toast";
const WithdrwalCreditRequest = () => {
  const location = useLocation();
  const getSearch = location.search.slice(1, 8);
console.log(location.search)
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const [GetList, setGetList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [Refresh, setRefresh] = useState(false);
  const [GetDiscription, setGetDiscription] = useState("");
  const [show, setShow] = useState(false);
  const [updateData, setUpdateData] = useState();
  const [updateStatus, setUpdateStatus] = useState();

  const columns = [
    {
      name: "Name ",
      selector: (row) => row?.userName,
    },
    {
      name: "Contact Number",
      selector: (row) => row?.mobileNumber,
    },
    {
      name: "Transaction ID",
      selector: (row) => row?.utr,
    },
    {
      name: "Amount",
      selector: (row) => row?.amount,
    },

    {
      name: "Payment Status",
      selector: (row) => (
        <>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              handleStatusUpdate(e.target.value, row);
              setUpdateData(row);
            }}
          >
            {row.status === "pending" ? (
              <>
                <option value="pending" disabled>
                  Pending
                </option>
                <option value="approve">Accept</option>
                <option value="decline">Reject</option>
              </>
            ) : row.status === "approve" ? (
              <>
                <option value="pending" disabled>
                  Pending
                </option>
                <option value="approve">Accept</option>
                <option value="decline">Reject</option>
              </>
            ) : row.status === "decline" ? (
              <>
                <option value="pending" disabled>
                  Pending
                </option>
                <option value="approve" disabled>
                  Accept
                </option>
                <option value="decline">Reject</option>
              </>
            ) : (
              <>
                <option value="pending">Pending</option>
                <option value="approve">Accept</option>
                <option value="decline">Reject</option>
              </>
            )}
          </select>
        </>
      ),
    },
    {
      name: "Created At",
      selector: (cell) => (
        <span data-toggle="tooltip" data-placement="top" title="Edit">
          {fa_time(cell?.createdAt)}
        </span>
      ),
    },
  ];

  const GetWithdrawalCreditRequest = async () => {
    setisLoading(true);
    const req = { adminId: userId, paymentStatus: getSearch };
    const res = await GET_CREDIT_WITHDRWAL_REQUEST(req, token);

    if (res.status === "Success") {
      setGetList(res.data);
      setisLoading(false);
    }
  };

  useEffect(() => {
    GetWithdrawalCreditRequest();
  }, [getSearch, Refresh]);

  const handleStatusUpdate = async (event, value) => {
    setUpdateStatus(event);
    if (event == "decline") {
      setShow(true);
    } else {
      let data = {
        adminId: userId,
        paymentHistoryId: value.paymentHistoryId,
        status: event,
        // description: value.description,
      };

      const response = await UPDATE_CREDIT_WITHDRWAL_REQUEST(data, token);
      if (response?.statusCode === 200) {
        toast.success(response.msg);
        setRefresh(!Refresh);
        setShow(false);
      } else {
        toast.error(response.msg);
      }
    }
  };

  const handleStatusUpdateSubmit = async (event, value) => {
    event.preventDefault();

    let data = {
      adminId: userId,
      paymentHistoryId: updateData.paymentHistoryId,
      status: updateStatus,
      description: GetDiscription,
    };

    const response = await UPDATE_CREDIT_WITHDRWAL_REQUEST(data, token);
    if (response?.statusCode === 200) {
      toast.success(response.msg);
      setRefresh(!Refresh);
      setShow(false);
    } else {
      toast.error(response.msg);
    }
  };
  return (
    <>
      <Content
        title="Game"
        // addtitle="Add Game"
        col_size={12}
      >
        <Data_Table
          isLoading={isLoading}
          columns={columns}
          data={GetList && GetList}
        />
        <ToastButton />

        <Model show={show} setShow={setShow}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Decline Request Resson</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                data-original-title=""
                title=""
                onClick={() => setShow(false)}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                  placeholder="Enter Resson For Decline Request"
                  onChange={(e) => setGetDiscription(e.target.value)}
                ></textarea>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleStatusUpdateSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </Model>
      </Content>
    </>
  );
};

export default WithdrwalCreditRequest;
