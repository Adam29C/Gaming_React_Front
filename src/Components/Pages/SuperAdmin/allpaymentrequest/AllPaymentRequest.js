import React, { useEffect, useState } from "react";
import Content from "../../../Layout/Content/Content";
import Data_Table from "../../../Helpers/Datatable";
import { fa_time } from "../../../Helpers/Date_formet";
import { GET_ALL_PAYMENT_REQUEST_API } from "../../../Service/superadmin.service";
import Date_picker from "../../../Helpers/Date_picker";
const AllPaymentRequest = () => {
  const userId = JSON.parse(localStorage.getItem("user_details"))?.id;
  const token = localStorage.getItem("token");
  const [selectDate, setSelectDate] = useState(null);
  const [selectPaymentStatus, setPaymentSelectStatus] = useState("all");
  const [selectStatus, setSelectStatus] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);


const columns = [
    {
      name: "Transaction Id",
      selector: (row) => (row?.utr ? row?.utr : " _ "),
      sortable: true,
    },

    {
      name: "Name",
      selector: (row) => (row?.userName ? row?.userName : " _ "),
      sortable: true,
    },
    {
      name: "Payment Status",
      selector: (row) => (row?.paymentStatus ? row?.paymentStatus : " _ "),
      sortable: true,
    },
    {
      name: "Mobile No.",
      selector: (row) => (row?.mobileNumber ? row?.mobileNumber : " _ "),
      sortable: true,
    },
    {
      name: "Image",
      cell: (row) => (

        row?.imageUrl ? (
          <img height="84px" width="56px"  src={row?.imageUrl} />
        ) : (
          " _ "
        )
      ),
    },

    {
      name: "Status",
      selector: (row) => (row?.status ? row?.status : " _ "),
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => (row?.amount ? row?.amount : " _ "),
      sortable: true,
    },


     {
      name: "Created At",
      selector: (row) =>
        fa_time(row?.createdAt) ? fa_time(row?.createdAt) : " _ ",
      sortable: true,
    },
  ];

const getAllPaymentRequest = async () => {
    let data = {adminId:userId,paymentStatus:"all"};
    const res = await GET_ALL_PAYMENT_REQUEST_API(data, token);
    if(res?.status === "Success"){
      setData(res?.data)
      setIsLoading(false)
    setFilteredData(res?.data)
}

  };

  useEffect(() => {
    getAllPaymentRequest();
  }, []);

  

  useEffect(() => {
    let tempData = data;

    if (selectPaymentStatus !== "all") {
      tempData = tempData?.filter(row => row?.paymentStatus === selectPaymentStatus);
    }

    if (selectStatus !== "all") {
      tempData = tempData?.filter(row => row?.status === selectStatus);
    }

    if (selectDate) {
      const selectedDate = fa_time(selectDate)
      tempData = tempData?.filter(row => {
        const rowDate = fa_time(row?.createdAt)
        return rowDate === selectedDate;
      });
    }

    setFilteredData(tempData);
  }, [selectPaymentStatus, selectStatus, selectDate, data]);

  return (
    <Content title="All Payment Request" col_size={12}>
      <div className="d-flex  mt-2 payment_history">
        <div className="d-flex mr-2">
          <h6 className="m-2">Payment Status:</h6>
          <select
            className="form-select custom-select"
            aria-label="Default select example"
            selected={"all"}
            onChange={(e) => setPaymentSelectStatus(e.target.value)}
          >
            <>
              <option value="all">All</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
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
              <option value="approve">approve</option>
              <option value="decline">decline</option>
            </>
          </select>
        </div>
        <Date_picker selectDate={selectDate} setSelectDate={setSelectDate} />
      </div>



      <Data_Table
        isLoading={isLoading}
        columns={columns}
        data={filteredData}
        showFilter={false}
      />
    </Content>
  );
};

export default AllPaymentRequest;
