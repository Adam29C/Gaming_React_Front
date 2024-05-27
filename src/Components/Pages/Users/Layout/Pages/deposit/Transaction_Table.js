import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentHistory } from "../../../../../Redux/Slice/User/user.slice";
import { PaymentHistory } from "../../../../../Service/user.service";
import moment from "moment";
import Loader from "../../../../../Helpers/Loader";

const Transaction_Table = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const { getPaymentHistorytState, isLoading } = useSelector(
    (state) => state.UserSlice
  );

  const getPaymentData = () => {
    let data = {
      token: token,
      userId: userId,
      paymentstatus: "credit",
    };

    dispatch(getPaymentHistory(data));
  };

  useEffect(() => {
    getPaymentData();
  }, []);
  return (
    <div>
      <div className="account-table">
        <table
          className="table table-bordered account-table-new"
          id="depositTable"
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
          <tbody id="depositTableData">
            {isLoading ? (
              <tr id="no_data_found">
                <td colSpan={5}>
                  {" "}
                  <Loader lodersize={20} />
                </td>
              </tr>
            ) : getPaymentHistorytState?.paymentInfo?.length === 0 ? (
              <tr id="no_data_found">
                <td colSpan={5}>No data found!</td>
              </tr>
            ) : (
              getPaymentHistorytState?.paymentInfo?.map((transaction) => {
                const {
                  accountId,
                  amount,
                  status,
                  createdAt,
                  reason,
                } = transaction;
                return( 
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
                )
                
               
})
            )}
          </tbody>
        </table>
        <div className="row video-player">
          <div className="col-md-12 ">
            <label>Please note the UTR Number👇</label>
            <img
              src="https://reddypanel.com/images/utr_demo_img.png"
              height={300}
              width={320}
            />
          </div>
          <div className="col-md-12 mb-2">
            <label>Phonepay To Bank Transfer👇</label>
            <a
              className="deposit-anchor"
              href="https://appopener.ai/yt/7ku56ivmr"
              target="_blank"
            >
              https://appopener.ai/yt/7ku56ivmr
            </a>
          </div>
          <div className="col-md-12 mb-2">
            <label>Gpay To Bank Transfer 👇</label>
            <a
              className="deposit-anchor"
              href="https://appopener.ai/yt/b6ngpraah"
              target="_blank"
            >
              https://appopener.ai/yt/b6ngpraah
            </a>
          </div>
          <div className="col-md-12 mb-2">
            <label>Paytm To Bank Transfer 👇</label>
            <a
              className="deposit-anchor"
              href="https://appopener.ai/yt/e7i9e3623"
              target="_blank"
            >
              https://appopener.ai/yt/e7i9e3623
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction_Table;
