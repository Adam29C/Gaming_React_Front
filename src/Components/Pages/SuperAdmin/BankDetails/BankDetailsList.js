import React, { useEffect, useState } from "react";
import Content from "../../../Layout/Content/Content";
import Data_Table from "../../../Helpers/Datatable";
import { Link, useNavigate } from "react-router-dom";
import { getGameRule } from "../../../Redux/Slice/common/common.slice";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import ToastButton from "../../../Helpers/Toast";
import toast from "react-hot-toast";
import {
  All_ACCOUNT_LIST,
  REMOVE_BANK_DETAILS,
  GameRuleListStatus,
} from "../../../Service/superadmin.service";

const GameRuleList = () => {
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;

  const [BankDetails, setgetBankDetails] = useState([]);
  const [UPIDetails, setUPIDetails] = useState([]);
  const [Refresh, setRefresh] = useState(false);
  const [isLoading,setIsLoading]=useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const columns = [
    {
      name: "Bank Name",
      selector: (row) => row.bankName,
    },
    {
      name: "Acount Holder",
      selector: (row) => row.accountHolderName,
    },

    {
      name: "Acount Number",
      selector: (row) => row.accountNumber,
    },

    {
      name: "IFSC Number",
      selector: (row) => row.ifscCode,
    },

    {
      name: "Image",
      cell: (row) => (
        row?.bankImage ? (
          <img height="84px" width="56px" alt={row?.name} src={row?.bankImage} />
        ) : (
          " _ "
        )
      ),
    },
    {
      name: "Min Amount",
      selector: (row) => row.minAmount,
    },

    {
      name: "Max Amount",
      selector: (row) => row.maxAmount,
    },

    {
      name: "actions",
      selector: (cell, row) => (
        <div style={{ width: "120px" }}>
          <div>
            <Link to={`/super/bankdetail/add`} state={cell}>
              <span data-toggle="tooltip" data-placement="top" title="Edit">
                <i class="ti-marker-alt fs-5 mx-1"></i>
              </span>
            </Link>

            <Link href="#" onClick={() => handleDeleteBankDetails(cell)}>
              <span data-toggle="tooltip" data-placement="top" title="Delete">
                <i class="ti-trash fs-5 mx-1"></i>
              </span>
            </Link>
          </div>
        </div>
      ),
    },
  ];

  const UpiColumns = [
    {
      name: "UPI Name",
      selector: (row) => row.upiName,
    },
    {
      name: "UPI Id",
      selector: (row) => row.upiId,
    },

    {
      name: "Image",
      cell: (row) => (

        row?.barCodeImage ? (
          <img height="84px" width="56px" alt={row?.name} src={row?.barCodeImage} />
        ) : (
          " _ "
        )
      ),
    },
    {
      name: "Min Amount",
      selector: (row) => row.minAmount,
    },

    {
      name: "Max Amount",
      selector: (row) => row.maxAmount,
    },

    {
      name: "actions",
      selector: (cell, row) => (
        <div style={{ width: "120px" }}>
          <div>
            <Link to={`/super/bankdetail/add`} state={cell}>
              <span data-toggle="tooltip" data-placement="top" title="Edit">
                <i class="ti-marker-alt fs-5 mx-1"></i>
              </span>
            </Link>

            <Link href="#" onClick={() => handleDeleteBankDetails(cell)}>
              <span data-toggle="tooltip" data-placement="top" title="Delete">
                <i class="ti-trash fs-5 mx-1"></i>
              </span>
            </Link>
          </div>
        </div>
      ),
    },
  ];

  const getBanksDetails = async () => {
    setIsLoading(true)
    const response = await All_ACCOUNT_LIST(userId, token);

    if (response.statusCode === 200) {
      setIsLoading(false)
    
      setgetBankDetails(response.data.bankList);
      setUPIDetails(response.data.upiList);
    }
  };
  useEffect(() => {
    getBanksDetails();
  }, [Refresh]);

  const handleDeleteBankDetails = async (rowData) => {
    console.log(rowData)
    const confirmed = window.confirm(
    `Do You Really Want To Remove This ${rowData.isBank == "true" ? "Bank Details" : "Upi Details"}`
    );
    if (confirmed) {
      const request = {
        adminId: userId,
        isBank:
          rowData.isBank == "true"
            ? Boolean(rowData.isBank)
            : Boolean(!rowData.isBank),
        id: rowData._id,
      };
      const response = await REMOVE_BANK_DETAILS(request, token);
      if (response.statusCode == 200) {
        toast.success(response.msg);
        dispatch(getGameRule(token));
        setRefresh(!Refresh);
      } else {
        toast.error(response.msg);
      }
    } 
  };



  const handleAdd = () => {
    navigate("/super/bankdetail/add");
  };
  return (
    <>
      <Content
        title="Bank Details"
        addtitle="Add Bank"
        handleAdd={handleAdd}
        col_size={12}
      >
        <Data_Table isLoading={isLoading} columns={columns} data={BankDetails && BankDetails} />
        <h3 className="admin-list-title mb-4 ">UPI Details</h3>
        <Data_Table isLoading={isLoading} columns={UpiColumns} data={UPIDetails && UPIDetails} />
        <ToastButton />
      </Content>
    </>
  );
};

export default GameRuleList;
