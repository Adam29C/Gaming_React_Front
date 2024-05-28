import React, { useEffect } from "react";
import { Available_Admin_Acount_Details } from "../../../../../../Redux/Slice/common/common.slice";
import { useDispatch } from "react-redux";

const Available_Option = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;

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
        <button
          className="nav-link"
          id="nav-imps-16067-tab"
          data-id={16067}
          data-toggle="tab"
          data-target="#nav-imps-16067"
          type="button"
          role="tab"
          aria-controls="nav-imps-16067"
          aria-selected="false"
          data-original-title=""
          title=""
        >
          Imps
          <img src="https://reddypanel.com/images/icon/imps.png" width="5%" />
        </button>

        <button
          className="nav-link"
          id="nav-bank-account-16066-tab"
          data-id={16066}
          data-toggle="tab"
          data-target="#nav-bank-account-16066"
          type="button"
          role="tab"
          aria-controls="nav-bank-account-16066"
          aria-selected="false"
          data-original-title=""
          title=""
        >
          Account
          <img
            src="https://reddypanel.com/images/icon/bank-account.png"
            width="5%"
          />
        </button>

        <button
          className="nav-link"
          id="nav-phonepe-16485-tab"
          data-id={16485}
          data-toggle="tab"
          data-target="#nav-phonepe-16485"
          type="button"
          role="tab"
          aria-controls="nav-phonepe-16485"
          aria-selected="true"
          data-original-title=""
          title=""
        >
          Phonepe
          <img
            src="https://reddypanel.com/images/icon/phonepe.png"
            width="5%"
          />
        </button>
        <button
          className="nav-link"
          id="nav-phonepe-16485-tab"
          data-id={16485}
          data-toggle="tab"
          data-target="#nav-phonepe-16485"
          type="button"
          role="tab"
          aria-controls="nav-phonepe-16485"
          aria-selected="true"
          data-original-title=""
          title=""
        >
          Phonepe
          <img
            src="https://reddypanel.com/images/icon/phonepe.png"
            width="5%"
          />
        </button>
        <button
          className="nav-link"
          id="nav-usdt-15538-tab"
          data-id={15538}
          data-toggle="tab"
          data-target="#nav-usdt-15538"
          type="button"
          role="tab"
          aria-controls="nav-usdt-15538"
          aria-selected="false"
          data-original-title=""
          title=""
        >
          USDT
          <img
            src="https://reddypanel.com/images/icon/usdt-icon.png"
            width="5%"
          />
        </button>
      </div>
    </>
  );
};

export default Available_Option;
