import React, { useState } from 'react'
import Content from '../../../Layout/Content/Content'
import Data_Table from '../../../Helpers/Datatable'
import "react-datepicker/dist/react-datepicker.css";
import Date_picker from '../../../Helpers/Date_picker';

const AllTransactionsList = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  const [selectBank, setSelectBank] = useState("all");
  const [selectUser, setSelectUser] = useState("all");
console.log("fdsfds",selectDate)
    const columns = [
        {
          name: "Transaction Id",
          selector: (row) => (row?.name ? row?.name : " _ "),
          sortable: true,
        },
        {
          name: "Payment Status",
          selector: (row) => (row?.email ? row?.email : " _ "),
          sortable: true,
        },
        {
          name: "Amount",
          selector: (row) => (row?.mobileL ? row?.mobileL : " _ "),
          sortable: true,
        },
        {
          name: "Status",
        //   selector: (row) => (row?.status ? row?.status : " _ "),
          sortable: true,
        },
        {
          name: "Reason ",
        //   selector: (row) => (row?.description ? row?.description : " _ "),
          sortable: true,
        },
        {
          name: "Created At",
        //   selector: (row) =>
        //     fa_time(row?.createdAt) ? fa_time(row?.createdAt) : " _ ",
          sortable: true,
        },
      ];

      const data = [
        {
            id:1,
            name:"amreen",
            email:"amdmsakdk",
            mobileL:"dbfhhd"
        }
      ]
  return (
    <Content  title="All Transactions"  col_size={12} >
           <div className="d-flex  mt-2 payment_history">
        <div className="d-flex mr-2">
          <h6 className="m-2">Bank List:</h6>
          <select
            className="form-select custom-select"
            aria-label="Default select example"
            selected={selectBank}
            onChange={(e) => setSelectBank(e.target.value)}
          >
            <>
              <option value="all">All</option>
              <option value="Bank1">Bank1</option>
              <option value="Bank2">Bank2</option>
            </>
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
              <option value="user1">user1</option>
              <option value="user2">user2</option>
            </>
          </select>
        </div>
     
        <Date_picker selectDate={selectDate} setSelectDate={setSelectDate}/>
      </div>

      <Data_Table
        columns={columns}
        data={data}
        // isLoading={isLoading}
        tableStyle={false}
        showFilter={false}
      />
    </Content>
  )
}

export default AllTransactionsList