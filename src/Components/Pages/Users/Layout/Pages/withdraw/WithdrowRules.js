import React, { useState, useEffect } from "react";
import ResetWithdrawPassword from "./ResetWithdrawPassword";
import { getUserProfile } from "../../../../../Redux/Slice/User/user.slice";
import { useDispatch, useSelector } from "react-redux";

const WithrowRules = () => {
  const dispatch = useDispatch();

  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const token = localStorage.getItem("token");

  const [showResetPassword, setShowResetPassword] = useState(false);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div
              className="card-body text-left"
              style={{
                fontSize: "10px !important",
                color: "red",
              }}
            >
              <p>
                1. This form is for withdrawing the amount from the main wallet
                only.
              </p>
              <p>
                2. The bonus wallet amount cannot be withdrawn by this form.
              </p>
              <p>
                3. Do not put Withdraw request without betting with deposit
                amount. Such activity may be identified as Suspicious
              </p>
              <p>
                4. If multiple users are using same withdraw account then all
                the linked users will be blocked.
              </p>
              <p>
                5. Maximum Withdraw time is 45 minutes then only complain on
                WhatsApp number.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <a className="reset_withdraw_password" href="#">
            <div className="card">
              <div
                className="card-body payment-issues"
                onClick={() => setShowResetPassword(true)}
              >
                <p>
                  <b>FOR RESET WITHDRAW PASSWORD CLICK HERE</b>
                  &nbsp;&nbsp;
                  <i className="fa-brands fa-whatsapp my-float withdraw-whp-icon" />
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <ResetWithdrawPassword
        show={showResetPassword}
        setShow={setShowResetPassword}
      />
    </div>
  );
};

export default WithrowRules;
