import React, { useState } from "react";
import {
  AccountDetailsList,
  RemoveAccountDetails,
  GenerateWithdrawalRequest,
} from "../../../../../Service/user.service";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToastButton from "../../../../../Helpers/Toast";
import toast from "react-hot-toast";

const ShowWithdrawList = () => {
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const token = localStorage.getItem("token");

  const [GetList, setGetList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [EnterAmount, setEnterAmount] = useState("");

  // GET ACCOUNT DETAILS
  const getAccountDetails = async () => {
    const response = await AccountDetailsList(userId, token);
    const finalArray = [];
    if (response.statusCode == 200) {
      finalArray.push(...response.data.bankList, ...response.data.upiList);
    }
    setGetList(finalArray);
  };
  useEffect(() => {
    getAccountDetails();
  }, [refresh]);

  // REMOVE ACCOUNT

  const RemoveAccount = async (id) => {
    const confirmed = window.confirm("Do You Really Want to Remove This");
    if (confirmed) {
      const req = {
        userId: userId,
        isBank: false,
        id: id,
      };

      const response = await RemoveAccountDetails(req, token);
      if (response.statusCode == 200) {
        toast.success(response.msg);
        setRefresh(!refresh);
      } else {
        toast.error(response.msg);
      }
    } else {
      console.log("");
    }
  };

  // COPY TO CLIPBOARD

  const CopyToClipBoard = (textToDisplay) => {
    navigator.clipboard
      .writeText(textToDisplay)
      .then(() => {
        toast.success(`Copied to clipboard`);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  // SUBMIT REQUEST

  const SubmitWithdraw = async (e, details) => {
    e.preventDefault();

    const req = {
      userId: userId,
      amount: EnterAmount,
      isBank: details.isBank,
      accountId: details._id,
    };
    const response = await GenerateWithdrawalRequest(req, token);

    if (response.statusCode == 200) {
      toast.success(response.msg);
      setEnterAmount("")

    } else {
      toast.error(response.response.data.msg);
      setEnterAmount("")
    }
  };

  return (
    <div>
      <div className="row" id="account-list-div">
        {GetList &&
          GetList.map((details, index) => {
            return (
              <>
                <div className="col-md-6" id="account-div-665128" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title" id="account-name-665128">
                        {details.bankName ? details.bankName : details.upiName}
                      </p>
                      <div className="account-data">
                        <p className="fw-bold card-text">
                          {details.isBank == "false"
                            ? "Type -  UPI"
                            : "Type - Bank Account"}
                        </p>

                        <p className="fw-bold card-text">
                          {details.upiName
                            ? `UPI No : ${details.upiId}`
                            : `Account No : ${details.accountNumber}`}
                          <button
                            className="btn btn-sm btn-success"
                            onClick={() =>
                              CopyToClipBoard(
                                details.upiName
                                  ? details.upiId
                                  : details.accountNumber
                              )
                            }
                          >
                            <i className="fa-solid fa-copy" />
                          </button>
                        </p>
                        <p className="  fw-bold card-text">
                          {details.accountNumber
                            ? `IFSC Code : ${details.ifscCode}`
                            : ``}
                          {details.accountNumber && (
                            <button
                              className="btn btn-sm btn-success"
                              onClick={() =>
                                CopyToClipBoard(
                                  details.accountNumber ? details.ifscCode : ``
                                )
                              }
                            >
                              <i className="fa-solid fa-copy" />
                            </button>
                          )}
                        </p>
                      </div>
                      <form id="withdraw665128Form">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter amount"
                          name="amount"
                          onChange={(e) => setEnterAmount(e.target.value)}
                        />

                        <button
                          type="button"
                          data-id={665128}
                          data-wp-add=""
                          className="btn btn-info withdrawBtn withdraw-btn-665128"
                          data-original-title=""
                          title=""
                          onClick={(e) => SubmitWithdraw(e, details)}
                        >
                          Withdraw
                        </button>
                      </form>
                      <button
                        className="btn btn-danger delete-account-btn"
                        data-id={665128}
                        data-url="https://reddypanel.com/client-account/reddybook.club/3306182/665128/delete"
                        data-original-title=""
                        title=""
                        onClick={() => RemoveAccount(details._id)}
                      >
                        <i className="fa-solid fa-trash" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

        <ToastButton />
      </div>
    </div>
  );
};

export default ShowWithdrawList;
