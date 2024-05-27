import React from "react";
import Footer from "../Footer/Footer";
import Headers from "../Header/Headers";
import { useNavigate, Link } from "react-router-dom";
const Content = ({
  title,
  children,
  col_size,
  show_footer,
  responsive_col,
  addtitle,
  handleAdd,
  Back_Button,
  Back__Button_route,
}) => {
  return (
    <>
      <div className="flapt-page-content">
        <div class="main-panel">
          <div className="content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className={`col-${col_size} ${responsive_col} box-margin`}>
                  <div className="card">
                    <div className="card-body">
                      <div class="admin-add-main">
                        <h3 className="card-titl1e mb-4">{title}</h3>
                        {addtitle ? (
                          <button
                            onClick={handleAdd}
                            className="admin-add-btn mb-4"
                          >
                            <i class="fa fa-plus" aria-hidden="true"></i>   {addtitle}
                          </button>
                        ) : (
                          ""
                        )}

                        {Back_Button ? (
                          <Link
                            to={Back__Button_route}
                            className="admin-add-btn mb-4"
                          >
                           <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
                          </Link>
                        ) : (
                          ""
                        )}
                      </div>

                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {show_footer ? <Footer /> : ""}
        </div>
      </div>
    </>
  );
};

export default Content;
