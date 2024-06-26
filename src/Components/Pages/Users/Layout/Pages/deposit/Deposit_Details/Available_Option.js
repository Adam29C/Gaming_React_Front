import React, { useEffect } from "react";

import Loader from "../../../../../../Helpers/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Available_Admin_Acount_Details } from "../../../../../../Redux/Slice/common/common.slice";
const Available_Option = ({
  handleShowPaymentDetails,
  mergeArray,
  displayData,
}) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const { isLoading } = useSelector((state) => state.CommonSlice);

  const getDetails = async () => {
    await dispatch(
      Available_Admin_Acount_Details({ userId: userId, token: token })
    );
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <div
        className="nav nav-tabs w-100 overflow-auto"
        id="nav-tab"
        role="tablist"
      >
        <button
          type="button"
          className="nav-link"
          onclick="window.open('https://wa.link/dujjncd6942tunbfb52','_blank');"
          data-original-title=""
          title=""
        >
          Whatsapp Deposit
          <img
            src="https://reddypanel.com/images/icon/whatsapp.png"
            width="5%"
          />
        </button>
        {isLoading && (
          <div className="user-bank-details-loader">
            <Loader lodersize={20} />
          </div>
        )}
        {mergeArray?.map((row) => (
          <div key={row?._id}>
            <button
              className={`nav-link ${
                displayData._id === row?._id ? "active" : ""
              }`}
              id="nav-imps-16067-tab"
              data-id={16067}
              data-toggle="tab"
              data-target="#nav-imps-16067"
              onClick={() => handleShowPaymentDetails(row)}
              type="button"
              role="tab"
              aria-controls="nav-imps-16067"
              aria-selected="false"
              data-original-title=""
              title=""
            >
              {row?.isBank === "true" ? row?.bankName : row?.upiName}
              <img
                src={
                  row?.isBank === "true"
                    ? "https://reddypanel.com/images/icon/bank-account.png"
                    : "https://reddypanel.com/images/icon/imps.png"
                }
                width="5%"
              />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Available_Option;
