import React, { useEffect, useState } from "react";
import Content from "../../../Layout/Content/Content";
import Data_Table from "../../../Helpers/Datatable";
import "react-datepicker/dist/react-datepicker.css";
import Date_picker from "../../../Helpers/Date_picker";
import {
  BANK_USER_LIST_ALLTRANSACTION,
  SHOW_ALL_TRANSACTION_LIST,
} from "../../../Service/superadmin.service";
import Loader from "../../../Helpers/Loader";
import { fa_time } from "../../../Helpers/Date_formet";

const AllTransactionsList = () => {
  const userId = JSON.parse(localStorage.getItem("user_details"))?.id;
  const token = localStorage.getItem("token");
  const [selectDate, setSelectDate] = useState(null);
  const [selectBank, setSelectBank] = useState("all");
  const [selectUser, setSelectUser] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [selectList, setSelectList] = useState([]);
  const [transactionList, setTransactionList] = useState([]);

  const bankList =
    (selectList?.adminAccountInfo && selectList?.adminAccountInfo[0]?.bank) ||
    [];
  const userList =
    (selectList?.adminAccountInfo && selectList?.adminAccountInfo[0]?.upi) ||
    [];

  const mergeArray = [...bankList, ...userList];

  const getUserBankList = async () => {
    try {
      const res = await BANK_USER_LIST_ALLTRANSACTION(userId, token);
      if (res?.status === "Success") {
        setSelectList(res?.data);
        setIsLoading(false);
      }
    } catch (error) {}
  };

  const getAllTransactionList = async () => {
    let apiData = {
      adminId: userId,
    };

    if (selectUser !== "all") {
      apiData.userId = selectUser;
    }

    if (selectBank !== "all") {
      apiData.bankUpiId = selectBank;
    }
    if (selectDate !== null) {
      apiData.date = fa_time(selectDate);
    }

    try {
      const res = await SHOW_ALL_TRANSACTION_LIST(apiData, token);
      if (res?.status === "Success") {
        setTransactionList(res?.data?.bankTransactionInfo);
        setIsLoading(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUserBankList();
  }, []);
  useEffect(() => {
    getAllTransactionList();
  }, [selectDate, selectBank, selectUser]);

  const columns = [
    {
      name: "Transaction Id",
      selector: (row) => (row?.utr ? row?.utr : " _ "),
      sortable: true,
    },
    {
      name: "Bank Upi Name",
      selector: (row) => (row?.bankUpiName ? row?.bankUpiName : " _ "),
      sortable: true,
    },
    {
      name: "User Name",
      selector: (row) => (row?.name ? row?.name : " _ "),
      sortable: true,
    },
    {
      name: "Mobile No.",
      selector: (row) => (row?.mobile ? row?.mobile : " _ "),
      sortable: true,
    },

    {
      name: "Payment Status",
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
        fa_time(row?.updatedAt) ? fa_time(row?.updatedAt) : " _ ",
      sortable: true,
    },
  ];

  return (
    <Content title="All Transactions" col_size={12}>
      <div className="d-flex  mt-2 payment_history">
        <div className="d-flex mr-2">
          <h6 className="m-2">Bank List:</h6>
          <select
            className="form-select custom-select"
            aria-label="Default select example"
            selected={selectBank}
            onChange={(e) => setSelectBank(e.target.value)}
          >
            <Loader />
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <option value="all">All</option>
                {mergeArray?.map((row) => (
                  <option
                    value={row?.accountNumber ? row?.accountNumber : row?.upiId}
                  >
                    {row?.bankName ? row?.bankName : row?.upiName}
                  </option>
                ))}
              </>
            )}
          </select>
        </div>
        <div className="d-flex mr-2">
          <h6 className="m-2">User List:</h6>
          <select
            className="form-select custom-select"
            aria-label="Default select example"
            selected={selectUser}
            onChange={(e) => setSelectUser(e.target.value)}
          >
            <>
              <option value="all">All</option>
              {selectList?.userTransectionInfo?.map((row) => (
                <option value={row?.userId}>{row?.name}</option>
              ))}
            </>
          </select>
        </div>

        <Date_picker selectDate={selectDate} setSelectDate={setSelectDate} />
      </div>

      <Data_Table
        columns={columns}
        data={transactionList}
        isLoading={isLoading}
        tableStyle={false}
        showFilter={false}
      />
    </Content>
  );
};

export default AllTransactionsList;
