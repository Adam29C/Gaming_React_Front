import React, { useState, useEffect } from "react";
import AddBankDetails from "./AddBankDetails";
import ShowWithdrawList from "./ShowBankList";
import WithrowRules from "./WithdrowRules";
import CreateWithdrawPasswordd from "./CreateWithdrawPassword";
// import { CreateWithdrawPassword } from "../../../../../Service/user.service";
import {
  getPaymentHistory,
  getUserProfile,
} from "../../../../../Redux/Slice/User/user.slice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Loader from "../../../../../Helpers/Loader";

const Withdraw = ({ abbb }) => {
  const dispatch = useDispatch();
  const { getPaymentHistorytState, isLoading } = useSelector(
    (state) => state.UserSlice
  );
  console.log(getPaymentHistorytState?.paymentInfo, 500);
  const [show, setShow] = useState(false);
  const [showCreatePassword, setShowCreatePassword] = useState(false);

  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const token = localStorage.getItem("token");

  const getUserData = async () => {
    const data = {
      id: userId,
      token: token,
    };
    const res = await dispatch(getUserProfile(data)).unwrap();

    if (!res?.data?.isWithdraw) {
      setShowCreatePassword(true);
    }
  };
  const getPaymentData = () => {
    let data = {
      token: token,
      userId: userId,
      paymentstatus: "debit",
    };

    dispatch(getPaymentHistory(data));
  };
  useEffect(() => {
    getUserData();
    getPaymentData();
  }, []);

  return (
    <>
      <main id="main" className="main">
        <router-outlet />
        <app-deposit-withdraw _nghost-fig-c63="">
          <div className="deposit_withdrawal">
            <h2 className="userscreen-title">
              <button className="btn-xs deposit-btn">Back</button>
            </h2>
            <div className="model-open">
              <div className="bankingUi">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 text-center pt-3 logo-section">
                      <button
                        type="button"
                        id="addAccountButton"
                        className="btn btn-info"
                        data-modal-type="add_account"
                        data-original-title=""
                        title=""
                        onClick={() => setShow(true)}
                      >
                        Add account
                      </button>
                    </div>
                    <div className="col-md-8">
                      <WithrowRules />
                      <ShowWithdrawList />
                    </div>

                    <div className="col-md-4">
                      <table
                        className="table table-bordered withdraw-table"
                        id="withdrawTable"
                      >
                        <thead>
                          <tr>
                          <th>Transaction No</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
              <th>Reason</th>
                          </tr>
                        </thead>
                        <tbody id="withdrawTableData">
                          {isLoading ? (
                            <tr id="no_data_found">
                              <td colSpan={5}>
                                {" "}
                                <Loader lodersize={20} />
                              </td>
                            </tr>
                          ) : getPaymentHistorytState?.paymentInfo?.length ===0 ? (
                            <tr id="no_data_found">
                              <td colSpan={5}>No data found!</td>
                            </tr>
                          ) : (
                            getPaymentHistorytState?.paymentInfo?.map(
                              (transaction) => {
                                const {
                                  accountId,
                                  amount,
                                  status,
                                  createdAt,
                                  reason,
                                } = transaction;

                                return (
                                  <tr key={accountId}>
                                  <td>
                                    {accountId ? accountId : " _ "}
                                  </td>
                                  <td>{amount ? amount : " _ "}</td>
                                  <td>{status ? status : " _ "}</td>
                                  <td>
                                    {moment(
                                      createdAt ? createdAt : " _ "
                                    ).format("DD-MM-YYYY")}
                                  </td>
                                  <td>{reason ? reason : " _ "}</td>
                                </tr>
                                );
                              }
                            )
                          )}
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AddBankDetails show={show} setShow={setShow} />
          <CreateWithdrawPasswordd
            show={showCreatePassword}
            setShow={setShowCreatePassword}
          />
        </app-deposit-withdraw>
      </main>
    </>
  );
};

export default Withdraw;
