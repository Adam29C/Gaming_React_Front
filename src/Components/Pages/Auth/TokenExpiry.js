import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="colorlib-error-page-area">
        {/* Error Content */}
        <div className="error-content">
          {/* Error Thumb */}
          <div className="erro-thumb">
            <img src="/assets/img/bg-img/bg.png" alt="" />
          </div>
          <h2>Token Expired </h2>
          <p>Your token has expired, you need to log in again.</p>
          <Link
            className="colorlib-btn"
            to={"/login"}
            style={{ background: "#4e3897" }}
          >
            Back To Log - in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
