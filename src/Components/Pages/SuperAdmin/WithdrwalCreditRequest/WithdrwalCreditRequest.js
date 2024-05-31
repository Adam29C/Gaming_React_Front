import React, { useEffect, useState } from "react";
import Content from "../../../Layout/Content/Content";
import Data_Table from "../../../Helpers/Datatable";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ToastButton from "../../../Helpers/Toast";
import { GET_CREDIT_WITHDRWAL_REQUEST } from "../../../Service/superadmin.service";
import { fDateTimeSuffix } from "../../../Helpers/Date_formet";
const WithdrwalCreditRequest = () => {
  const location = useLocation();
  const getSearch = location.search.slice(1, 8);

  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const [GetList, setGetList] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  console.log("GetList", GetList);

  const [show, setShow] = useState(false);
  const [updateData, setUpdateData] = useState();

  const dispatch = useDispatch();
  const columns = [
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
            value={row.status}
            onChange={() => handleStatusUpdate(row)}
          >
            <option value={"pending"}>Pending</option>
            <option value={"approve"}>Accept</option>
            <option value={"decline"}>Reject</option>
          </select>
        </>
      ),
    },
    {
      name: "Created At",
      selector: (cell) => (
        <span data-toggle="tooltip" data-placement="top" title="Edit">
          {fDateTimeSuffix(cell?.createdAt)}
        </span>
      ),
    },
    // {
    //   name: "actions",
    //   selector: (cell, row) => (
    //     <div style={{ width: "120px" }}>
    //       <div>
    //         <Link onClick={() => handleUpdate(cell)}>
    //           <span data-toggle="tooltip" data-placement="top" title="Edit">
    //             <i class="ti-marker-alt fs-5 mx-1 "></i>
    //           </span>
    //         </Link>

    //         <Link href="#" onClick={() => ChangeStatus(cell?._id)}>
    //           <span data-toggle="tooltip" data-placement="top" title="Delete">
    //             <i class="ti-trash fs-5 mx-1 "></i>
    //           </span>
    //         </Link>
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  const GetWithdrawalCreditRequest = async () => {
    const req = { adminId: userId, paymentStatus: getSearch };
    const res = await GET_CREDIT_WITHDRWAL_REQUEST(req, token);

    if (res.status === "Success") {
      setGetList(res.data);
    }
    console.log(res.status);
  };

  useEffect(() => {
    GetWithdrawalCreditRequest();
  }, [getSearch]);

  const handleStatusUpdate = async (value) => {
    let data = {
      adminId: "66574c81902c5c07b65074d2",
      paymentHistoryId: value.paymentHistoryId,
      status: value.status,

      description: "decline",
    };
    // const response = await UPDATE_CREDIT_WITHDRWAL_REQUEST(data, token);
    // if (response?.statusCode === 200) {
    //   toast.success(response.msg);
    // } else {
    //   toast.error(response.msg);
    // }
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
      </Content>
    </>
  );
};

export default WithdrwalCreditRequest;
