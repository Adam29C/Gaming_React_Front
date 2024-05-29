import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getMatchList,
  getSeriesList,
} from "../../../../Redux/Slice/User/user.slice";
import { v4 } from "uuid";
import { Generate_Token } from "../../../../Redux/Slice/Auth/auth.slice";
import Model from "../../../../Helpers/Model";
import { Rule } from "../Pages/rules/Rule";
const Sidebar = (props) => {
  const { getSeriesListState, getMatchListState } = useSelector(
    (state) => state.UserSlice
  );
  const role = localStorage.getItem("roles");
  const [token, setToken] = useState("");
  const [show, setShow] = useState(false);
  const [expandedSeries, setExpandedSeries] = useState(null);
  const dispatch = useDispatch();

  const getSeriesListdata = getSeriesListState?.data?.response?.items;
  const getMatchListdata = getMatchListState?.data?.response?.items;

  useEffect(() => {
    const fetchData = async () => {
      const request1 = { deviceId: v4() };
      try {
        const res1 = await dispatch(Generate_Token(request1)).unwrap();
        if (res1.statusCode === 200) {
          const token = res1.data;
          setToken(token);
          await dispatch(getSeriesList(token)).unwrap();
        }
      } catch (error) {
        // console.error("Error:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleMatchClick = async (matchId) => {
    if (token) {
      try {
        let data = {
          token: token,
          id: matchId,
        };
        await dispatch(getMatchList(data)).unwrap();
        setExpandedSeries((prevSeries) =>
          prevSeries === matchId ? null : matchId
        ); // Toggle the expanded series
      } catch (error) {
        // console.error("Error fetching match details:", error);
      }
    }
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
      <app-sidebar _ngcontent-nsr-c57="" _nghost-nsr-c55="">
        <aside id="sidebar" className="sidebar">
          <ul id="sidebar-nav" className="sidebar-nav">
            <img
              className="mobile-logo"
              src="/assets/images/reddybook/logo.png"
            />
            <li className="d-none d-sm-block nav-item">
              <a
                href="/assets/images/sports/detail/28127348"
                className="nav-link final-link"
              >
                <img src="/assets/images/events/menu-ipl2024.png" />
                <span className="blinker">
                  <b>IPL 2024</b>
                </span>
              </a>
            </li>
            <li className="d-none d-sm-block nav-item">
              <a
                href="/sports/detail/1704972513"
                className="nav-link final-link"
              >
                <img src="/assets/images/events/menu-loksabha.png" />
                <span className="blinker">
                  <b>LOK SABHA 2024</b>
                </span>
              </a>
            </li>

            {/* {(role == 2 ) && (      <li className="nav-item">
            {" "}
            <Link to='/deposit' className="nav-link" aria-expanded="false">
              <img src="/assets/images/deposit-icon.png" />
              <span>Deposit</span>
              <i className="bi bi-caret-down ms-auto" />
            </Link>
          </li>)} */}

            {role == 2 && (
              <>
                <li className="nav-item">
                  {" "}
                  <Link
                    to="/deposit"
                    className="nav-link deposit-withdraw-sidebar-title deposit final-link"
                    aria-expanded="false"
                  >
                    <img src="/assets/images/deposit-icon.png" />
                    <span>Deposit</span>
                    <i className="bi bi-caret-down ms-auto" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/withdraw"
                    className="nav-link deposit-withdraw-sidebar-title withdraw final-link"
                    aria-expanded="false"
                  >
                    <img src="/assets/images/withdrawal-icon.png" />
                    <span>Withdraw</span>
                    <i className="bi bi-caret-down ms-auto" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/payment-history"
                    className="nav-link"
                    aria-expanded="false"
                  >
                    <img src="/assets/images/withdrawal-icon.png" />
                    <span>Payment History</span>
                    <i className="bi bi-caret-down ms-auto" />
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                className="nav-link collapsed"
                href="#collapse0"
                aria-expanded="false"
              >
                <img src="/assets/images/events/menu-4.png" />
                <span>Cricket</span>
                <i className="bi bi-caret-down ms-auto" />
              </a>

              <ul className="nav-content collapse" id="collapse0">
                {getSeriesListdata?.map((row) => (
                  <li>
                    <Link
                      data-bs-toggle="collapse"
                      // href="#collapse00"
                      href={`#collapse${row.cid}`}
                      onClick={() => handleMatchClick(row?.cid)}
                      className="collapsed"
                      // aria-expanded="false"
                      aria-expanded={
                        expandedSeries === row.cid ? "true" : "false"
                      }
                    >
                      <span>{row?.title}</span>
                      <i className="bi bi-caret-down ms-auto" />
                    </Link>

                    <div
                      // className="collapse" id="collapse00"
                      className={`collapse ${
                        expandedSeries === row.cid ? "show" : ""
                      }`}
                      id={`collapse${row.cid}`}
                    >
                      <ul className="nav-second-level">
                        {getMatchListdata?.map((matchrow) => (
                          <li>
                            <Link
                              to={`match-details/${matchrow.match_id}`}
                              // data-bs-toggle="collapse"
                              className="final-link"
                            >
                              <span>{matchrow?.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
            <li _ngcontent-uit-c55="" className="d-block d-sm-none nav-item">
              <Link
                _ngcontent-uit-c55=""
                href="#"
                onClick={(e) => { 
                  props.setOpen(!props.open);
                  openSidebar(e);
                  setShow(true)
                }}
                className="nav-link final-link"
              >
                <img _ngcontent-uit-c55="" src="assets/images/menu-rules.png" />
                <span _ngcontent-uit-c55="">rules</span>
              </Link>
            </li>

       
          </ul>
          <div
            id="carouselExampleIndicators"
            data-bs-ride="carousel"
            className="carousel slide"
          >
            <div
              className="carousel-inner"
              style={{
                background:
                  'url("https://efesclubcdn.com/FTP/BETBABA/Home/sl-c-layer-one.png")',
              }}
            >
              <div className="carousel-item">
                <img src="/assets/images/ls_01.png" className="d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src="/assets/images/ls_02.png" className="d-block w-100" />
              </div>
              <div className="carousel-item active">
                <img src="/assets/images/ls_03.png" className="d-block w-100" />
              </div>
              <div className="carousel-item">
                <img src="/assets/images/ls_04.png" className="d-block w-100" />
              </div>
            </div>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
              className="carousel-control-prev"
            >
              <span aria-hidden="true" className="carousel-control-prev-icon" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
              className="carousel-control-next"
            >
              <span aria-hidden="true" className="carousel-control-next-icon" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </aside>
      </app-sidebar>
      <Model show={show} setShow={setShow}>
        <Rule setShow={setShow} />
      </Model>
    </>
  );
};

export default Sidebar;
