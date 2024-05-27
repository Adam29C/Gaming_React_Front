import React from "react";

const Logo = () => {
  return (
    <>
      <div className="flapt-logo">
        <a href="index.html">
          <img
            className="desktop-logo"
            src="/assets/img/core-img/logo.png"
            alt="Desktop Logo"
          />{" "}
          <img
            className="small-logo"
            src="/assets/img/core-img/small-logo.png"
            alt="Mobile Logo"
          />
        </a>
      </div>
    </>
  );
};

export default Logo;
