import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Withdraw } from "../../../../Service/user.service";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { Rule } from "../Pages/rules/Rule";
import Model from "../../../../Helpers/Model";
import SubHeader from "./SubHeader";
const Header = (props) => {
  const role = localStorage.getItem("roles");
  const token = localStorage.getItem("token");
  const user_details = JSON.parse(localStorage.getItem("user_details"));
  const [show, setShow] = useState(false);
  const [data, setData] = useState();

  const navigate = useNavigate();

  const getWithdrawData = async () => {
    if (role == 2) {
      const res = await Withdraw(user_details?.id, token, navigate);
      setData(res);
    }
  };

  useEffect(() => {
    getWithdrawData();
    if (token != null && token != "null" && token != undefined) {
      const decoded = jwtDecode(token && token);
      const expiryTimestamp = decoded.exp * 1000;
      if (expiryTimestamp < Date.now()) {
        navigate("/");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_details");
    localStorage.removeItem("roles");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const openSidebar = (e) => {
  
    if (props.open) {
      document.body.classList.add("toggle-sidebar");
    } else {
      props.setOpen(!props.open);
      document.body.classList.remove("toggle-sidebar");
    }
  };

  return (
    <>
      {" "}
      <app-topnav _ngcontent-nsr-c57="" _nghost-nsr-c54="">
        <header
          _ngcontent-nsr-c54=""
          id="header"
          className="header fixed-top d-flex align-items-center"
        >
          <div
            _ngcontent-nsr-c54=""
            className="container d-flex align-items-center"
          >
            <div
              _ngcontent-nsr-c54=""
              className="d-flex align-items-center justify-content-between"
            >
              {/* toggle */}
              <Link
                _ngcontent-nsr-c54=""
                to="/dashboard"
                className="logo d-flex align-items-center"
              >
                <img
                  _ngcontent-nsr-c54=""
                  alt=""
                  className="desktop-logo"
                  src="/assets/images/reddybook/logo-text.png"
                />
                <img
                  _ngcontent-nsr-c54=""
                  className="mobile-logo"
                  src="/assets/images/reddybook/logo.png"
                />
              </Link>

              <button
                onClick={(e) => {
                  props.setOpen(!props.open);
                  openSidebar(e);
                }}
              >
                <i
                  _ngcontent-nsr-c54=""
                  className="bi bi-list-nested toggle-sidebar-btn"
                />
              </button>
              {/* toggle*/}
            </div>
            <div _ngcontent-nsr-c54="" className="search-bar">
              <form
                _ngcontent-nsr-c54=""
                noValidate=""
                method="POST"
                action="#"
                className="search-form d-flex align-items-center ng-untouched ng-pristine ng-valid"
              >
                <input
                  _ngcontent-nsr-c54=""
                  type="text"
                  placeholder="Search Events"
                  typeaheadoptionfield="name"
                  className="form-control ng-untouched ng-pristine ng-valid"
                  aria-expanded="false"
                  aria-autocomplete="list"
                />

                <button _ngcontent-nsr-c54="" type="submit" title="Search">
                  <i _ngcontent-nsr-c54="" className="bi bi-search" />
                </button>
              </form>
            </div>
            <Link
              _ngcontent-nsr-c54=""
              href="#"
              onClick={() => setShow(true)}
              className="rules"
            >
              rules
            </Link>
            {role == 2 ? (
              <>
                <Link
                  _ngcontent-mmi-c54=""
                  to="/deposit"
                  className="rules btn-deposit ng-star-inserted"
                >
                  <img
                    _ngcontent-mmi-c54=""
                    src="/assets/images/deposit-icon.png"
                  />{" "}
                  deposit
                </Link>

                <Link
                  _ngcontent-mmi-c54=""
                  to="/withdraw"
                  className="rules btn-withdraw ng-star-inserted"
                >
                  <img
                    _ngcontent-mmi-c54=""
                    src="/assets/images/withdrawal-icon.png"
                  />
                  withdrawal
                </Link>
              </>
            ) : (
              ""
            )}

            <nav _ngcontent-nsr-c54="" className="header-nav ms-auto">
              <ul _ngcontent-nsr-c54="" className="d-flex align-items-center">
                {role == 2 ? (
                  <>
                    <li
                      _ngcontent-mmi-c54=""
                      className="nav-item expo_bal ng-star-inserted"
                    >
                      <a
                        _ngcontent-mmi-c54=""
                        href="javascript:void(0);"
                        className="nav-link"
                      >
                        <i _ngcontent-mmi-c54="" className="bi bi-bank" />
                        <span _ngcontent-mmi-c54="">
                          Bal
                          <b _ngcontent-mmi-c54="">
                            {data?.WalledInfo?.amount
                              ? data?.WalledInfo?.amount
                              : "0"}
                          </b>
                        </span>
                      </a>
                    </li>
                    <li
                      _ngcontent-mmi-c54=""
                      className="nav-item expo_bal ng-star-inserted"
                    >
                      <a
                        _ngcontent-mmi-c54=""
                        href="/market-analysis"
                        routerlink="/market-analysis"
                        className="nav-link"
                      >
                        <i _ngcontent-mmi-c54="" className="bi bi-bar-chart" />
                        <span _ngcontent-mmi-c54="">
                          exp<b _ngcontent-mmi-c54="">0</b>
                        </span>
                      </a>
                    </li>
                    <li
                      _ngcontent-mmi-c54=""
                      className="nav-item dropdown pe-3"
                    >
                      <a
                        _ngcontent-mmi-c54=""
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        className="nav-link nav-profile d-flex align-items-center pe-0 ng-star-inserted"
                      >
                        <i
                          _ngcontent-mmi-c54=""
                          className="bi bi-person-fill userpro-icons"
                        />
                        <span
                          _ngcontent-mmi-c54=""
                          className="dropdown-toggle ps-lg-2"
                        >
                          {user_details?.name}
                        </span>
                      </a>{" "}
                      <ul
                        _ngcontent-mmi-c54=""
                        className="dropdown-menu header-ul  dropdown-menu-end dropdown-menu-arrow profile"
                      >
                        <li _ngcontent-mmi-c54="" className="dropdown-header ">
                          <h6 _ngcontent-mmi-c54="">
                            HI, {user_details?.name}
                          </h6>
                        </li>

                        <li _ngcontent-mmi-c54="">
                          <Link
                            _ngcontent-mmi-c54=""
                            to="/"
                            className="dropdown-item d-flex align-items-center deposit-withdraw-sidebar-title"
                          >
                            <img
                              _ngcontent-mmi-c54=""
                              src="/assets/images/menu-home.png"
                              className="user-header-menue-img"
                            />
                            <span _ngcontent-mmi-c54="">home</span>
                          </Link>
                        </li>
                        <li _ngcontent-mmi-c54="" className="ng-star-inserted">
                          <a
                            _ngcontent-mmi-c54=""
                            href="/deposit"
                            routerlink="/deposit"
                            className="dropdown-item hover-list d-flex align-items-center deposit-withdraw-sidebar-title deposit"
                          >
                            <img
                              _ngcontent-mmi-c54=""
                              src="/assets/images/deposit-icon.png"
                              className="user-header-menue-img"
                            />
                            <span _ngcontent-mmi-c54="">Deposit </span>
                          </a>
                        </li>

                        <li _ngcontent-mmi-c54="" className="ng-star-inserted">
                          <a
                            _ngcontent-mmi-c54=""
                            href="/withdraw"
                            routerlink="/withdraw"
                            className="dropdown-item hover-list d-flex align-items-center deposit-withdraw-sidebar-title withdraw"
                          >
                            <img
                              _ngcontent-mmi-c54=""
                              src="/assets/images/withdrawal-icon.png"
                              className="user-header-menue-img"
                            />
                            <span _ngcontent-mmi-c54="">Withdraw</span>
                          </a>
                        </li>

                        <li _ngcontent-mmi-c54="">
                          <Link
                            _ngcontent-mmi-c54=""
                            to="/userprofile"
                            className="dropdown-item d-flex align-items-center"
                          >
                            <i _ngcontent-mmi-c54="" className="bi bi-person" />
                            <span _ngcontent-mmi-c54="">My Profile</span>
                          </Link>
                        </li>
                        <li _ngcontent-mmi-c54="">
                          <Link
                            _ngcontent-mmi-c54=""
                            href="#"
                            onClick={handleLogout}
                            className="dropdown-item d-flex align-items-center"
                          >
                            <i
                              _ngcontent-mmi-c54=""
                              className="bi bi-box-arrow-right"
                            />
                            <span _ngcontent-mmi-c54="">Sign Out</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </>
                ) : (
                  ""
                )}
                {(!role === 2 || role === null || role === "null") && (
                  <li _ngcontent-nsr-c54="" className="nav-item dropdown pe-3">
                    <Link
                      _ngcontent-nsr-c54=""
                      type="button"
                      className="btn-login"
                      to="/signup"
                    >
                      Signup
                    </Link>

                    <Link
                      _ngcontent-nsr-c54=""
                      type="button"
                      className="btn-login"
                      to="/login"
                    >
                      Login
                    </Link>

                    <ul
                      _ngcontent-nsr-c54=""
                      className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"
                    >
                      <li _ngcontent-nsr-c54="" className="dropdown-header">
                        <h6 _ngcontent-nsr-c54="">HI,</h6>
                      </li>

                      <li _ngcontent-nsr-c54="">
                        <Link
                          _ngcontent-nsr-c54=""
                          href="#"
                          onClick={handleLogout}
                          className="dropdown-item d-flex align-items-center"
                        >
                          <i
                            _ngcontent-nsr-c54=""
                            className="bi bi-box-arrow-right"
                          />
                          <span _ngcontent-nsr-c54="">Sign Out</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}{" "}
              </ul>
            </nav>
          </div>
        </header>
        <SubHeader />
      </app-topnav>
      <Model show={show} setShow={setShow}>
        <Rule setShow={setShow} />
      </Model>
    </>
  );
};

export default Header;
