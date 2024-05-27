import React from "react";
import UserContent from "../../content/UserContent";
import DataTable from "react-data-table-component";
import Data_Table from "../../../../../Helpers/Datatable";



const PaymentHistory = () => {



  const customStyles = {
    rows: {
      style: {
        // border:"1px solid black",
        minHeight: '30px', // override the row height
      },
    },
    headCells: {
      style: {
        minHeight:"35px",
        height:"35px",
       backgroundColor:"#DFDDE0",
      //  border:"1px solid black",
      paddingLeft: '8px', // override the cell padding for head cells
			paddingRight: '8px',
     
     
      },
    },
    cells: {
      style: {
       
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Year',
      selector: row => row.year,
      sortable: true,
    },
  ];
  
  const data = [
      {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]
  return (
    <UserContent title="Payment History">
      <Data_Table
      columns={columns}
      data={data}
      tableStyle={false}

      />
      {/* <div className="user-data-table-main"></div>
      <DataTable className="user-data-table" columns={columns} data={data} customStyles={customStyles}/> */}
    </UserContent>
  );
};

export default PaymentHistory;
