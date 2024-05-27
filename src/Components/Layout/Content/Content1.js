import React from "react";
import Footer from "../Footer/Footer";
import Headers from "../Header/Headers";
const Content = ({ title, children, col_size, responsive_col }) => {
  return (
    <>
      {/* <div className="flapt-page-content"> */}
      <div
        class="main-content align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="hero">
          <div className="cube" />
          <div className="cube" />
          <div className="cube" />
          <div className="cube" />
          <div className="cube" />
          <div className="cube" />
        </div>
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center">
            <div className={` ${responsive_col} box-margin`}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-titl1e mb-5">{title}</h5>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
