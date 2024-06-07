import React, { useEffect } from "react";
import { useAppContext } from "../../Context/CreateContext";
import { Link, useNavigate } from "react-router-dom";
import Notification from "../../Helpers/Notification";
import { GetExpired } from "../../Utils/UserExpired";
const Headers = () => {
  const { toggleMenuCollapsed } = useAppContext();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");


  const handleClick = () => {
    toggleMenuCollapsed();
  };

  useEffect(() => {
    const checkTokenExpiry = () => {
      GetExpired(token, navigate);
    };
    const interval = setInterval(checkTokenExpiry, 5000);
    return () => clearInterval(interval);
  }, [navigate]);

  // -----------------

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_details");
    localStorage.removeItem("roles");
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1000);
  };
  return (
    <>
      <header className="top-header-area d-flex align-items-center justify-content-between">
        <div className="left-side-content-area d-flex align-items-center">
          {/* Mobile Logo */}
          <div className="mobile-logo">
            <a href="index.html">
              <img src="assets/img/core-img/small-logo.png" alt="Mobile Logo" />
            </a>
          </div>
          {/* Triggers */}
          <div className="flapt-triggers">
            <div
              className="menu-collasped"
              id="menuCollasped"
              onClick={() => {
                handleClick();
              }}
            >
              <i className="bx bx-grid-alt" />
            </div>
            <div
              className="mobile-menu-open"
              id="mobileMenuOpen"
              onClick={() => {
                handleClick();
              }}
            >
              <i className="bx bx-grid-alt" />
            </div>
          </div>
          {/* Left Side Nav */}
          <ul className="left-side-navbar d-flex align-items-center">
            {/* <li className="hide-phone app-search">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <span className="bx bx-search-alt" />
            </li> */}
          </ul>
        </div>
        <div className="right-side-navbar d-flex align-items-center justify-content-end">
          {/* Mobile Trigger */}
          <div className="right-side-trigger" id="rightSideTrigger">
            <i className="bx bx-menu-alt-right" />
          </div>
          {/* Top Bar Nav */}
          <ul className="right-side-content d-flex align-items-center">
            {/* Message Area */}
            {/* <li className="nav-item dropdown">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bx-envelope" />
              </button>
              <div className="dropdown-menu dropdown-menu-right">
               
                <div className="top-message-area">
                
                  <div className="message-heading">
                    <div className="heading-title">
                      <h6 className="mb-0">All Messages</h6>
                    </div>
                    <span>10</span>
                  </div>
                  <div className="message-box" id="messageBox">
                    <a href="#" className="dropdown-item">
                      <i className="bx bx-dollar-circle" />
                      <div>
                        <span>Did you know?</span>
                        <p className="mb-0 font-12">
                          Adipisicing elit. Ipsa, porro!
                        </p>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <i className="bx bx-shopping-bag" />
                      <div>
                        <span>Congratulations!</span>
                        <p className="mb-0 font-12">
                          Consectetur adipisicing elit.
                        </p>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <i className="bx bx-wallet-alt" />
                      <div>
                        <span>Hello Obeta</span>
                        <p className="mb-0 font-12">
                          Consectetur adipisicing elit.
                        </p>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <i className="bx bx-border-all" />
                      <div>
                        <span>Your order is placed</span>
                        <p className="mb-0 font-12">
                          Consectetur adipisicing elit.
                        </p>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <i className="bx bx-wallet-alt" />
                      <div>
                        <span>Haslina Obeta</span>
                        <p className="mb-0 font-12">
                          Consectetur adipisicing elit.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li> */}
            {/* Message Area */}
            <Notification />

            <li className="nav-item dropdown">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="/assets/img/bg-img/person_1.jpg" alt="" />
              </button>
              <div className="dropdown-menu profile dropdown-menu-right">
                {/* User Profile Area */}
                <div className="user-profile-area">
                  {/* <Link to="/super/profile" className="dropdown-item">
                    <i className="bx bx-user font-15" aria-hidden="true" /> My
                    profile
                  </Link>
                  <a href="#" className="dropdown-item">
                    <i className="bx bx-wallet font-15" aria-hidden="true" /> My
                    wallet
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="bx bx-wrench font-15" aria-hidden="true" />{" "}
                    settings
                  </a> */}
                  <button
                    onClick={() => handleLogout()}
                    className="dropdown-item"
                  >
                    <i className="bx bx-power-off font-15" aria-hidden="true" />{" "}
                    Sign-out
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Headers;
