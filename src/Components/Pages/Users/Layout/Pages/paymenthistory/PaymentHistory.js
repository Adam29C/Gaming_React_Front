import React, { useEffect, useState } from "react";
import UserContent from "../../content/UserContent";
import DataTable from "react-data-table-component";
import Data_Table from "../../../../../Helpers/Datatable";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentHistory } from "../../../../../Redux/Slice/User/user.slice";
import { fDateTimeSuffix, fa_time } from "../../../../../Helpers/Date_formet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PaymentHistory = () => {
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const { getPaymentHistorytState, isLoading } = useSelector(
    (state) => state.UserSlice
  );
  const [selectDate, setSelectDate] = useState(new Date());
  const [selectStatus, setSelectStatus] = useState("all");

  const dispatch = useDispatch();

  const getPaymentHistoryData = () => {
    let data = {
      userId: userId,
      paymentstatus: selectStatus,
      token,
      date: fa_time(selectDate),
    };
    dispatch(getPaymentHistory(data));
  };
  useEffect(() => {
    getPaymentHistoryData();
  }, [selectDate, selectStatus]);

  const columns = [
    {
      name: "Transaction Id",
      selector: (row) => (row?.utr ? row?.utr : " _ "),
      sortable: true,
    },
    {
      name: "Payment Status",
      selector: (row) => (row?.paymentStatus ? row?.paymentStatus : " _ "),
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => (row?.amount ? row?.amount : " _ "),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (row?.status ? row?.status : " _ "),
      sortable: true,
    },
    {
      name: "Reason ",
      selector: (row) => (row?.description ? row?.description : " _ "),
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) =>
        fa_time(row?.createdAt) ? fa_time(row?.createdAt) : " _ ",
      sortable: true,
    },
  ];

  return (
    <UserContent title="Payment History">
      <div className="d-flex  mt-2 payment_history">
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
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </>
          </select>
        </div>
        <div className="d-flex">
          <h6 className="m-2">Select a date:</h6>
          <DatePicker
            selected={selectDate}
            onChange={(e) => setSelectDate(e)}
            maxDate={new Date()}
            className="custom-datepicker"
          />
        </div>
      </div>

      <Data_Table
        columns={columns}
        data={getPaymentHistorytState?.paymentInfo}
        isLoading={isLoading}
        tableStyle={false}
        showFilter={false}
      />
      {/* <div className="user-data-table-main"></div>
      <DataTable className="user-data-table" columns={columns} data={data} customStyles={customStyles}/> */}
    </UserContent>
  );
};

export default PaymentHistory;
