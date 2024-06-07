import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import Loader from "./Loader";
import { Tooltip, OverlayTrigger, Form } from "react-bootstrap";

const Data_Table = ({ columns, data, tableStyle, isLoading,showFilter  }) => {
  const adminStyles = {
    rows: {
      background: "#4E3896",
      // color: "#fff",
    },
    headCells: {
      style: {
        // background: "#4E3896",
        color: "#000000",
        backgroundColor: "#4bb6b9",
        fontSize: "15px",
        fontWeight: "600",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        fontWeight: "500",
        color: "black",
      },
    },
  };

  const userStyles = {
    rows: {
      style: {
        // minHeight: "72px",
      },
    },
    headCells: {
      style: {
        background: "#4E3896",
        color: "#fff",
      },
    },
    cells: {
      background: "#4E3896",
      color: "#fff",
    },
  };


  const columns1 = [
    {
      name: "Sr. No",
      selector: (row, index) => index + 1,
      width: "70px",
    },
    ...columns,
  ];

  return (
    <>
      <DataTableExtensions
        columns={columns1}
        data={data}
        print={false}
        export={false}
        filter={showFilter}
      >
        <DataTable
          noHeader
          // defaultSortField="id"
          className="custom-datatable"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          // tableStyle={tableStyle ? adminStyles : userStyles}
          customStyles={adminStyles}
          noDataComponent={
            isLoading ? (
              <div className="user-loading-main">
                <Loader lodersize={25} />
              </div>
            ) : (
              "There are no records to display"
            )
          }
        />
      </DataTableExtensions>
    </>
  );
};

export default Data_Table;
