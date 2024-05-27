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
          <h2>Opps! This page Could Not Be Found!</h2>
          <p>
            Sorry bit the page you are looking for does not exist, have been
            removed or name changed
          </p>
          <Link
            className="colorlib-btn"
            to={"/login"}
            style={{ background: "#4e3897" }}
          >
            Back To Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
