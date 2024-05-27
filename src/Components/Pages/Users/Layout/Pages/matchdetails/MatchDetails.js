import React, { useEffect, useState } from "react";
import UserContent from "../../content/UserContent";
import { useParams } from "react-router-dom";
import { Generate_Token } from "../../../../../Redux/Slice/Auth/auth.slice";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { getMatchDetails } from "../../../../../Redux/Slice/User/user.slice";

const MatchDetails = () => {
  const { getMatchDetailsState } = useSelector((state) => state.UserSlice);
  const { id } = useParams();
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
console.log(getMatchDetailsState,"getMatchDetailsState")
// Generate token and set it in state
useEffect(() => {
  const generateTokenApi = async () => {
    const request1 = { deviceId: v4() };
    try {
      const res1 = await dispatch(Generate_Token(request1)).unwrap();
      if (res1.statusCode === 200) {
        const tokendata = res1.data;
        setToken(tokendata);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  generateTokenApi();
}, [dispatch]);

// Fetch match details after the token is set
useEffect(() => {
  if (token) {
    const fetchMatchDetails = async () => {
      const apidata = {
        token: token,
        id: id,
      };
      try {
        await dispatch(getMatchDetails(apidata)).unwrap();
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMatchDetails();
  }
}, [dispatch, token, id]);

  return (
    <main _ngcontent-pfj-c57="" id="main" className="main">
      <router-outlet _ngcontent-pfj-c57="" />
      <app-sport-detail _nghost-pfj-c81="" className="ng-star-inserted">
        <section _ngcontent-pfj-c81="" className="section listing_page">
          <div _ngcontent-pfj-c81="" className="row">
            <div
              _ngcontent-pfj-c81=""
              className="col-md-12 col-lg-8 detail-center-column"
            >
              <div
                _ngcontent-pfj-c81=""
                className="middle-page-content details-page"
              >
                <div _ngcontent-pfj-c81="" className="card-header game-heading">
                  <span _ngcontent-pfj-c81="" className="card-header-title">
                    Indian Premier League
                  </span>
                  {/**/}
                  <span
                    _ngcontent-pfj-c81=""
                    className="date-time ng-star-inserted"
                  >
                    (01/03/2024 04:30:00 PM)
                  </span>
                  {/**/}
                  <a
                    _ngcontent-pfj-c81=""
                    href="javascript:void(0)"
                    className="best_link d-lg-none ng-star-inserted"
                  >
                    Bets
                  </a>
                  {/**/}
                  {/**/}
                </div>
                <div
                  _ngcontent-pfj-c81=""
                  id="collapseBasic"
                  aria-hidden="true"
                  className="collapse ng-star-inserted"
                  style={{ display: "none" }}
                >
                  {/**/}
                </div>
                {/**/}
                {/**/}
                {/**/}
                <div _ngcontent-pfj-c81="" className="sr-widget-1" />
                {/**/}
                <div _ngcontent-pfj-c81="" className="ng-star-inserted">
                  <div
                    _ngcontent-pfj-c81=""
                    className="market_section ng-star-inserted"
                  >
                    {/**/}
                  </div>
                  <div
                    _ngcontent-pfj-c81=""
                    className="market_section ng-star-inserted"
                  >
                    <div _ngcontent-pfj-c81="" className="ng-star-inserted">
                      <p _ngcontent-pfj-c81="">
                        <span _ngcontent-pfj-c81="" className="mrkname">
                          BOOKMAKER (IPL CUP WINNER)
                        </span>
                        {/**/}
                        <a
                          _ngcontent-pfj-c81=""
                          href="javascript:void(0)"
                          className="add-pin ng-star-inserted"
                        >
                          <i _ngcontent-pfj-c81="" className="bi bi-bookmark" />
                        </a>
                        {/**/}
                        {/**/}
                        <span _ngcontent-pfj-c81="" className="min-max">
                          {" "}
                          Min: 100 | Max: 50k{" "}
                          <a
                            _ngcontent-pfj-c81=""
                            href="javascript:void(0)"
                            className="ms-2 game-rules-icon"
                          >
                            <span _ngcontent-pfj-c81="">
                              <i
                                _ngcontent-pfj-c81=""
                                className="bi bi-info-square-fill"
                              />
                            </span>
                          </a>
                          <a
                            _ngcontent-pfj-c81=""
                            data-bs-toggle="collapse"
                            aria-expanded="true"
                            className="collapsed an-collapse"
                            href="#bookmaker1"
                          />
                        </span>
                      </p>
                      <div
                        _ngcontent-pfj-c81=""
                        className="collapse show"
                        id="bookmaker1"
                      >
                        <app-bookmaker-detail
                          _ngcontent-pfj-c81=""
                          _nghost-pfj-c77=""
                        >
                          <div
                            _ngcontent-pfj-c77=""
                            className="ng-star-inserted"
                          >
                            <div
                              _ngcontent-pfj-c77=""
                              className="row align-items-center oddsHeader"
                            >
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-5 col-8 px-0"
                              />
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-7 col-4 px-0"
                              >
                                <div
                                  _ngcontent-pfj-c77=""
                                  className="btn-group"
                                >
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="ex-bl d-none d-md-block"
                                  />
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="ex-bl d-none d-md-block"
                                  />
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back"
                                  >
                                    back
                                  </button>
                                  <button _ngcontent-pfj-c77="" className="lay">
                                    lay
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="ex-bl d-none d-md-block"
                                  />
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="ex-bl d-none d-md-block"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              _ngcontent-pfj-c77=""
                              className="row mx-0 align-items-center ng-star-inserted"
                            >
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-5 col-8 px-0"
                              >
                                <span
                                  _ngcontent-pfj-c77=""
                                  className="marketevent"
                                >
                                  Gujarat Titans
                                </span>
                                {/**/}
                                {/**/}
                              </div>
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-7 col-4 px-0"
                              >
                                <div
                                  _ngcontent-pfj-c77=""
                                  className="btn-group"
                                >
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back"
                                  >
                                    <span _ngcontent-pfj-c77="">0</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button _ngcontent-pfj-c77="" className="lay">
                                    <span _ngcontent-pfj-c77="">0</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <div
                                    _ngcontent-pfj-c77=""
                                    className="suspended ng-star-inserted"
                                  >
                                    {" "}
                                    suspended
                                  </div>
                                  {/**/}
                                </div>
                              </div>
                              {/**/}
                            </div>
                            <div
                              _ngcontent-pfj-c77=""
                              className="row mx-0 align-items-center ng-star-inserted"
                            >
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-5 col-8 px-0"
                              >
                                <span
                                  _ngcontent-pfj-c77=""
                                  className="marketevent"
                                >
                                  Royal Challengers Bangalore
                                </span>
                                {/**/}
                                {/**/}
                              </div>
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-7 col-4 px-0"
                              >
                                <div
                                  _ngcontent-pfj-c77=""
                                  className="btn-group"
                                >
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back"
                                  >
                                    <span _ngcontent-pfj-c77="">0</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button _ngcontent-pfj-c77="" className="lay">
                                    <span _ngcontent-pfj-c77="">0</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <div
                                    _ngcontent-pfj-c77=""
                                    className="suspended ng-star-inserted"
                                  >
                                    {" "}
                                    suspended
                                  </div>
                                  {/**/}
                                </div>
                              </div>
                              {/**/}
                            </div>
                            <div
                              _ngcontent-pfj-c77=""
                              className="row mx-0 align-items-center ng-star-inserted"
                            >
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-5 col-8 px-0"
                              >
                                <span
                                  _ngcontent-pfj-c77=""
                                  className="marketevent"
                                >
                                  Rajasthan Royals
                                </span>
                                {/**/}
                                {/**/}
                              </div>
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-7 col-4 px-0"
                              >
                                <div
                                  _ngcontent-pfj-c77=""
                                  className="btn-group"
                                >
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back"
                                  >
                                    <span _ngcontent-pfj-c77="">300</span>
                                    <small _ngcontent-pfj-c77="">50k</small>
                                  </button>
                                  <button _ngcontent-pfj-c77="" className="lay">
                                    <span _ngcontent-pfj-c77="">350</span>
                                    <small _ngcontent-pfj-c77="">50k</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  {/**/}
                                </div>
                              </div>
                              {/**/}
                            </div>
                            <div
                              _ngcontent-pfj-c77=""
                              className="row mx-0 align-items-center ng-star-inserted"
                            >
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-5 col-8 px-0"
                              >
                                <span
                                  _ngcontent-pfj-c77=""
                                  className="marketevent"
                                >
                                  Mumbai Indians
                                </span>
                                {/**/}
                                {/**/}
                              </div>
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-7 col-4 px-0"
                              >
                                <div
                                  _ngcontent-pfj-c77=""
                                  className="btn-group"
                                >
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back"
                                  >
                                    <span _ngcontent-pfj-c77="">0</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button _ngcontent-pfj-c77="" className="lay">
                                    <span _ngcontent-pfj-c77="">0</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <div
                                    _ngcontent-pfj-c77=""
                                    className="suspended ng-star-inserted"
                                  >
                                    {" "}
                                    suspended
                                  </div>
                                  {/**/}
                                </div>
                              </div>
                              {/**/}
                            </div>
                            <div
                              _ngcontent-pfj-c77=""
                              className="row mx-0 align-items-center ng-star-inserted"
                            >
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-5 col-8 px-0"
                              >
                                <span
                                  _ngcontent-pfj-c77=""
                                  className="marketevent"
                                >
                                  Delhi Capitals
                                </span>
                                {/**/}
                                {/**/}
                              </div>
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-7 col-4 px-0"
                              >
                                <div
                                  _ngcontent-pfj-c77=""
                                  className="btn-group"
                                >
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back"
                                  >
                                    <span _ngcontent-pfj-c77="">0</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button _ngcontent-pfj-c77="" className="lay">
                                    <span _ngcontent-pfj-c77="">0</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <div
                                    _ngcontent-pfj-c77=""
                                    className="suspended ng-star-inserted"
                                  >
                                    {" "}
                                    suspended
                                  </div>
                                  {/**/}
                                </div>
                              </div>
                              {/**/}
                            </div>
                            <div
                              _ngcontent-pfj-c77=""
                              className="row mx-0 align-items-center ng-star-inserted"
                            >
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-5 col-8 px-0"
                              >
                                <span
                                  _ngcontent-pfj-c77=""
                                  className="marketevent"
                                >
                                  Lucknow Super Giants
                                </span>
                                {/**/}
                                {/**/}
                              </div>
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-7 col-4 px-0"
                              >
                                <div
                                  _ngcontent-pfj-c77=""
                                  className="btn-group"
                                >
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back"
                                  >
                                    <span _ngcontent-pfj-c77="">0</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button _ngcontent-pfj-c77="" className="lay">
                                    <span _ngcontent-pfj-c77="">0</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <div
                                    _ngcontent-pfj-c77=""
                                    className="suspended ng-star-inserted"
                                  >
                                    {" "}
                                    suspended
                                  </div>
                                  {/**/}
                                </div>
                              </div>
                              {/**/}
                            </div>
                            <div
                              _ngcontent-pfj-c77=""
                              className="row mx-0 align-items-center ng-star-inserted"
                            >
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-5 col-8 px-0"
                              >
                                <span
                                  _ngcontent-pfj-c77=""
                                  className="marketevent"
                                >
                                  Chennai Super Kings
                                </span>
                                {/**/}
                                {/**/}
                              </div>
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-7 col-4 px-0"
                              >
                                <div
                                  _ngcontent-pfj-c77=""
                                  className="btn-group"
                                >
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back"
                                  >
                                    <span _ngcontent-pfj-c77="">0</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button _ngcontent-pfj-c77="" className="lay">
                                    <span _ngcontent-pfj-c77="">0</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <div
                                    _ngcontent-pfj-c77=""
                                    className="suspended ng-star-inserted"
                                  >
                                    {" "}
                                    suspended
                                  </div>
                                  {/**/}
                                </div>
                              </div>
                              {/**/}
                            </div>
                            <div
                              _ngcontent-pfj-c77=""
                              className="row mx-0 align-items-center ng-star-inserted"
                            >
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-5 col-8 px-0"
                              >
                                <span
                                  _ngcontent-pfj-c77=""
                                  className="marketevent"
                                >
                                  Punjab Kings
                                </span>
                                {/**/}
                                {/**/}
                              </div>
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-7 col-4 px-0"
                              >
                                <div
                                  _ngcontent-pfj-c77=""
                                  className="btn-group"
                                >
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back"
                                  >
                                    <span _ngcontent-pfj-c77="">0</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button _ngcontent-pfj-c77="" className="lay">
                                    <span _ngcontent-pfj-c77="">0</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <div
                                    _ngcontent-pfj-c77=""
                                    className="suspended ng-star-inserted"
                                  >
                                    {" "}
                                    suspended
                                  </div>
                                  {/**/}
                                </div>
                              </div>
                              {/**/}
                            </div>
                            <div
                              _ngcontent-pfj-c77=""
                              className="row mx-0 align-items-center ng-star-inserted"
                            >
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-5 col-8 px-0"
                              >
                                <span
                                  _ngcontent-pfj-c77=""
                                  className="marketevent"
                                >
                                  Sunrisers Hyderabad
                                </span>
                                {/**/}
                                {/**/}
                              </div>
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-7 col-4 px-0"
                              >
                                <div
                                  _ngcontent-pfj-c77=""
                                  className="btn-group"
                                >
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back"
                                  >
                                    <span _ngcontent-pfj-c77="">280</span>
                                    <small _ngcontent-pfj-c77="">50k</small>
                                  </button>
                                  <button _ngcontent-pfj-c77="" className="lay">
                                    <span _ngcontent-pfj-c77="">320</span>
                                    <small _ngcontent-pfj-c77="">50k</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  {/**/}
                                </div>
                              </div>
                              {/**/}
                            </div>
                            <div
                              _ngcontent-pfj-c77=""
                              className="row mx-0 align-items-center ng-star-inserted"
                            >
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-5 col-8 px-0"
                              >
                                <span
                                  _ngcontent-pfj-c77=""
                                  className="marketevent"
                                >
                                  Kolkata Knight Riders
                                </span>
                                {/**/}
                                {/**/}
                              </div>
                              <div
                                _ngcontent-pfj-c77=""
                                className="col-lg-6 col-md-7 col-4 px-0"
                              >
                                <div
                                  _ngcontent-pfj-c77=""
                                  className="btn-group"
                                >
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back back-light d-md-block d-none"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="back"
                                  >
                                    <span _ngcontent-pfj-c77="">93</span>
                                    <small _ngcontent-pfj-c77="">50k</small>
                                  </button>
                                  <button _ngcontent-pfj-c77="" className="lay">
                                    <span _ngcontent-pfj-c77="">99</span>
                                    <small _ngcontent-pfj-c77="">50k</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  <button
                                    _ngcontent-pfj-c77=""
                                    className="d-md-block d-none lay lay-light"
                                  >
                                    <span _ngcontent-pfj-c77="">-</span>
                                    <small _ngcontent-pfj-c77="">0.0</small>
                                  </button>
                                  {/**/}
                                </div>
                              </div>
                              {/**/}
                            </div>
                            {/**/}
                            {/**/}
                          </div>
                          {/**/}
                          {/**/}
                        </app-bookmaker-detail>
                      </div>
                    </div>
                    {/**/}
                  </div>
                  {/**/}
                </div>
                {/**/}
                {/**/}
                <tabset
                  _ngcontent-pfj-c81=""
                  className="newtab_collect tab-container"
                  _nghost-pfj-c38=""
                >
                  <ul
                    _ngcontent-pfj-c38=""
                    role="tablist"
                    className="nav nav-tabs"
                    aria-label="Tabs"
                  >
                    <li
                      _ngcontent-pfj-c38=""
                      className="active nav-item ng-star-inserted"
                    >
                      <a
                        _ngcontent-pfj-c38=""
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link active"
                        aria-controls=""
                        aria-selected="true"
                        id=""
                      >
                        <span _ngcontent-pfj-c38="" />
                        <span
                          _ngcontent-pfj-c81=""
                          className="ng-star-inserted"
                        >
                          Fancy
                        </span>
                        {/**/}
                        {/**/}
                      </a>
                    </li>
                    <li
                      _ngcontent-pfj-c38=""
                      className="nav-item ng-star-inserted"
                    >
                      <a
                        _ngcontent-pfj-c38=""
                        href="javascript:void(0);"
                        role="tab"
                        className="nav-link"
                        aria-controls=""
                        aria-selected="false"
                        id=""
                      >
                        <span _ngcontent-pfj-c38="" />
                        <span
                          _ngcontent-pfj-c81=""
                          className="ng-star-inserted"
                        >
                          Premium
                        </span>
                        <em
                          _ngcontent-pfj-c81=""
                          className="blink-soft ng-star-inserted"
                        >
                          new
                        </em>
                        {/**/}
                        {/**/}
                      </a>
                    </li>
                    {/**/}
                  </ul>
                  <div _ngcontent-pfj-c38="" className="tab-content">
                    <tab
                      _ngcontent-pfj-c81=""
                      role="tabpanel"
                      aria-labelledby=""
                      className="tab-pane active ng-star-inserted"
                    >
                      {/**/}
                      {/**/}
                    </tab>
                    {/**/}
                    <tab
                      _ngcontent-pfj-c81=""
                      className="ng-star-inserted tab-pane"
                      role="tabpanel"
                      aria-labelledby=""
                    >
                      {/**/}
                      <iframe
                        _ngcontent-pfj-c81=""
                        className="premium-iframe"
                      />
                    </tab>
                    {/**/}
                  </div>
                </tabset>
                <div _ngcontent-pfj-c81="" className="empty1 ng-star-inserted">
                  <div
                    _ngcontent-pfj-c81=""
                    className="market_section ng-star-inserted"
                  >
                    {/**/}
                  </div>
                  <div
                    _ngcontent-pfj-c81=""
                    className="market_section ng-star-inserted"
                  >
                    {/**/}
                  </div>
                  <div
                    _ngcontent-pfj-c81=""
                    className="market_section ng-star-inserted"
                  >
                    {/**/}
                  </div>
                  {/**/}
                </div>
                {/**/}
              </div>
            </div>
            <div
              _ngcontent-pfj-c81=""
              className="col-md-12 col-lg-4 detail-right-column d-none d-lg-block px-0"
            >
              {/**/}
              <app-bet-slip _ngcontent-pfj-c81="" _nghost-pfj-c74="">
                <div _ngcontent-pfj-c74="" className="card mb-1 place-bet">
                  <div _ngcontent-pfj-c74="" className="card-header">
                    <h6
                      _ngcontent-pfj-c74=""
                      className="card-header game-heading"
                    >
                      Place Bet
                    </h6>
                  </div>
                  {/**/}
                  {/**/}
                </div>
              </app-bet-slip>
              <app-bet-list
                _ngcontent-pfj-c81=""
                _nghost-pfj-c75=""
                className="ng-star-inserted"
              >
                <div _ngcontent-pfj-c75="" className="card mb-1 place-bet">
                  <div _ngcontent-pfj-c75="" className="card-header">
                    <h6
                      _ngcontent-pfj-c75=""
                      className="card-header game-heading"
                    >
                      Open Bets
                    </h6>
                  </div>
                  <div _ngcontent-pfj-c75="" className="card-body p-0">
                    <div _ngcontent-pfj-c75="" id="OpenBets">
                      <select
                        _ngcontent-pfj-c75=""
                        className="form-control mobile-hide ng-untouched ng-pristine ng-valid"
                      >
                        {/**/}
                      </select>
                      <div
                        _ngcontent-pfj-c75=""
                        className="openBetsTabs accounts"
                      >
                        <tabset
                          _ngcontent-pfj-c75=""
                          type="tab nav-tabs-bordered"
                          _nghost-pfj-c38=""
                          className="tab-container"
                        >
                          <ul
                            _ngcontent-pfj-c38=""
                            role="tablist"
                            className="nav nav-tab nav-tabs-bordered"
                            aria-label="Tabs"
                          >
                            <li
                              _ngcontent-pfj-c38=""
                              className="active nav-item ng-star-inserted"
                            >
                              <a
                                _ngcontent-pfj-c38=""
                                href="javascript:void(0);"
                                role="tab"
                                className="nav-link active"
                                aria-controls="tab1"
                                aria-selected="true"
                                id="tab1-link"
                              >
                                <span _ngcontent-pfj-c38="">Matched</span>
                                {/**/}
                                {/**/}
                              </a>
                            </li>
                            <li
                              _ngcontent-pfj-c38=""
                              className="nav-item ng-star-inserted"
                            >
                              <a
                                _ngcontent-pfj-c38=""
                                href="javascript:void(0);"
                                role="tab"
                                className="nav-link"
                                aria-controls=""
                                aria-selected="false"
                                id=""
                              >
                                <span _ngcontent-pfj-c38="">UnMatched</span>
                                {/**/}
                                {/**/}
                              </a>
                            </li>
                            <li
                              _ngcontent-pfj-c38=""
                              className="nav-item ng-star-inserted"
                            >
                              <a
                                _ngcontent-pfj-c38=""
                                href="javascript:void(0);"
                                role="tab"
                                className="nav-link"
                                aria-controls=""
                                aria-selected="false"
                                id=""
                              >
                                <span _ngcontent-pfj-c38="">Fancy</span>
                                {/**/}
                                {/**/}
                              </a>
                            </li>
                            {/**/}
                          </ul>
                          <div _ngcontent-pfj-c38="" className="tab-content">
                            <tab
                              _ngcontent-pfj-c75=""
                              heading="Matched"
                              id="tab1"
                              role="tabpanel"
                              aria-labelledby="tab1-link"
                              className="tab-pane active"
                            >
                              <div
                                _ngcontent-pfj-c75=""
                                className="table-responsive"
                              >
                                <table
                                  _ngcontent-pfj-c75=""
                                  className="table table-striped table-bordered"
                                >
                                  <thead _ngcontent-pfj-c75="">
                                    <tr _ngcontent-pfj-c75="">
                                      <td _ngcontent-pfj-c75="">Selname</td>
                                      <td _ngcontent-pfj-c75="">Odds</td>
                                      <td _ngcontent-pfj-c75="">Stake</td>
                                      <td _ngcontent-pfj-c75="">Date/Time</td>
                                    </tr>
                                  </thead>
                                  <tbody _ngcontent-pfj-c75="">{/**/}</tbody>
                                </table>
                              </div>
                            </tab>
                            <tab
                              _ngcontent-pfj-c75=""
                              heading="UnMatched"
                              role="tabpanel"
                              aria-labelledby=""
                              className="tab-pane"
                            >
                              <div
                                _ngcontent-pfj-c75=""
                                className="table-responsive"
                              >
                                <table
                                  _ngcontent-pfj-c75=""
                                  className="table table-striped table-bordered"
                                >
                                  <thead _ngcontent-pfj-c75="">
                                    <tr _ngcontent-pfj-c75="">
                                      <td _ngcontent-pfj-c75="">Selname</td>
                                      <td _ngcontent-pfj-c75="">Odds</td>
                                      <td _ngcontent-pfj-c75="">Stake</td>
                                      <td _ngcontent-pfj-c75="">Date/Time</td>
                                    </tr>
                                  </thead>
                                  <tbody _ngcontent-pfj-c75="">{/**/}</tbody>
                                </table>
                              </div>
                            </tab>
                            <tab
                              _ngcontent-pfj-c75=""
                              heading="Fancy"
                              role="tabpanel"
                              aria-labelledby=""
                              className="tab-pane"
                            >
                              <div
                                _ngcontent-pfj-c75=""
                                className="table-responsive"
                              >
                                <table
                                  _ngcontent-pfj-c75=""
                                  className="table table-striped table-bordered"
                                >
                                  <thead _ngcontent-pfj-c75="">
                                    <tr _ngcontent-pfj-c75="">
                                      <td _ngcontent-pfj-c75="">Selname</td>
                                      <td _ngcontent-pfj-c75="">Odds</td>
                                      <td _ngcontent-pfj-c75="">Stake</td>
                                      <td _ngcontent-pfj-c75="">Date/Time</td>
                                    </tr>
                                  </thead>
                                  <tbody _ngcontent-pfj-c75="">{/**/}</tbody>
                                </table>
                              </div>
                            </tab>
                          </div>
                        </tabset>
                      </div>
                    </div>
                  </div>
                </div>
              </app-bet-list>
              {/**/}
            </div>
          </div>
        </section>
        {/**/}
      </app-sport-detail>
      {/**/}
    </main>
  );
};

export default MatchDetails;
