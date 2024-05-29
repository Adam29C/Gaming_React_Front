import React, { useEffect, useState } from "react";
import UserContent from "../../content/UserContent";
import { useParams } from "react-router-dom";
import { Generate_Token } from "../../../../../Redux/Slice/Auth/auth.slice";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { getMatchDetails } from "../../../../../Redux/Slice/User/user.slice";

const MatchDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();


  const [token, setToken] = useState("");


  const { getMatchDetailsState } = useSelector((state) => state.UserSlice);
  

  console.log("getMatchDetailsState" ,getMatchDetailsState);



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
  }, []);

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
    <main _ngcontent-qsd-c57="" id="main" className="main">
      <router-outlet _ngcontent-qsd-c57="" />
      <app-sport-detail _nghost-qsd-c81="" className="ng-star-inserted">
        <section _ngcontent-qsd-c81="" className="section listing_page">
          <div _ngcontent-qsd-c81="" className="row">
            <div
              _ngcontent-qsd-c81=""
              className="col-md-12 col-lg-8 detail-center-column"
            >
              <div
                _ngcontent-qsd-c81=""
                className="middle-page-content details-page"
              >
                <div _ngcontent-qsd-c81="" className="card-header game-heading">
                  <span _ngcontent-qsd-c81="" className="card-header-title">
                    Northern Knights v Munster Reds
                  </span>

                  <span
                    _ngcontent-qsd-c81=""
                    className="date-time ng-star-inserted"
                  >
                    (29/05/2024 03:15:00 PM)
                  </span>
                </div>
                <div
                  _ngcontent-qsd-c81=""
                  id="collapseBasic"
                  aria-hidden="true"
                  className="collapse ng-star-inserted"
                  style={{ display: "none" }}
                ></div>

                <div
                  _ngcontent-qsd-c81=""
                  style={{ marginBottom: 3 }}
                  className="ng-star-inserted"
                >
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\nhtml,body{ padding: 0; margin: 0; }\n.container-main {\npadding: 0;\nbackground: linear-gradient(0deg, rgb(0 0 0 / 39%), rgb(0 0 0 / 30%)),url(https://www.stageandscreen.travel/sites/default/files/styles/large/public/LP%20-%20Cricket%20Australia.jpg?itok=dStxvjPW);\nbackground-repeat: no-repeat;\nbackground-size: cover;\nmargin-right: auto;\nmargin-left: auto;\ncolor: white;\nheight: 80px;\nalign-items: center;\ndisplay: grid;\nbackground-position: bottom;\nposition: relative;\n}\n@media only screen and (max-width: 767px) {\n.container-main {\nheight: 105px !important;\n}\n}\n.row-ctm {\ndisplay: flex;\nflex-wrap: wrap;\nalign-items: center;\npadding: 0px 0;\n}\n.team {\nflex: 0 0 25%;\nmax-width: 25%;\ntext-align: center;\n}\n.match_status {\nflex: 0 0 50%;\nmax-width: 50%;\ntext-align: center;\ntext-transform: uppercase;\nfont-weight: 700;\nfont-size: 10px;\nletter-spacing: 0px;\npadding: 4px 0;\n}\n.inn1 {\nfont-size: 10px;\nfont-weight: 600;\nfont-style: italic;\ncolor: #fff;\nwidth: max-content;\nmargin: 0 auto;\npadding: 5px;\n}\n.curr_inn {\nfont-size: 12px;\nfont-weight: 600;\n}\n.team_name {\ntext-transform: capitalize;\nfont-size: 14px;\nmargin: 0;\nfont-weight: 600;\n}\n.day {\nwidth: 100%;\ndisplay: block;\ntext-transform: capitalize;\nfont-size: 10px;\n}\n.status {\nwidth: 100%;\n}\n.day:before {\ncolor: #fff;\nmargin: 0 5px;\n}\n.day:after {\ncolor: #fff;\nmargin: 0 5px;\n}\n.team_name img {\npadding-left: 5px;\nvertical-align: middle;\n}\n.score-over ul {\npadding: 0;\nmargin:0;\n}\n.score-over ul li {\ndisplay: inline-block;\ncolor: #fff;\n}\n.score-over ul li p{\nmargin: 0;\n}\n.six-balls{\npadding : 2px;\nfont-size : 17px;\n}\n.target{\n  font-size : 9px;\n  margin-top:25px;\n  margin-bottom:5px;\n}\n.commantry {\n  -webkit-animation: txt 3s ease-out infinite;\n  animation: txt 3s ease-out infinite;\n  font-family: tahomabd;\n  font-size: 12px;\n  width: 50%;\n  display:block;\n  position: absolute;\n  top: 5%;\n  -webkit-transform: translate(-50%,-50%);\n  transform: translate(-50%,-50%)\n}\n@-webkit-keyframes txt {\n  0% {\n      -webkit-transform: scale(1);\n      transform: scale(1)\n  }\n\n  50% {\n      -webkit-transform: scale(1.25);\n      transform: scale(1.25)\n  }\n\n  100% {\n      -webkit-transform: scale(1);\n      transform: scale(1)\n  }\n\n}\n\n@keyframes txt {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1)\n}\n\n50% {\n    -webkit-transform: scale(1.25);\n    transform: scale(1.25)\n}\n\n100% {\n    -webkit-transform: scale(1);\n    transform: scale(1)\n}\n}\n",
                    }}
                  />
                  <div className="container-main">
                    <div className="row-ctm">
                      <div className="team">
                        <div className="team_name">NK</div>
                        <div className="curr_inn">
                          <span className="run">35/1</span>
                          <span className="over">(9.0)</span>
                          <br />
                          <span className="over">CRR : 3.89 | RRR: 0.00</span>
                        </div>
                      </div>
                      <div className="match_status">
                        <span className="commantry">Over Change</span>
                        <p className="target" />
                        <span className="day">
                          <div className="score-over">
                            <ul>
                              <li className="six-balls ">0</li>
                              <li className="six-balls ">0</li>
                              <li className="six-balls ">0</li>
                              <li className="six-balls ">wd</li>
                              <li className="six-balls ">0</li>
                              <li className="six-balls ">0</li>
                              <li className="six-balls w-color">w</li>
                            </ul>
                          </div>
                        </span>
                      </div>
                      <div className="team">
                        <div className="team_name">MR</div>
                        <div className="curr_inn">
                          <span className="run">0/0</span>
                          <span className="over">(0.0)</span>
                          <br />
                          <span className="over">CRR : 0 | RRR: 0.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div _ngcontent-qsd-c81="" className="sr-widget-1" />
                <div _ngcontent-qsd-c81="" className="ng-star-inserted">
                  <div
                    _ngcontent-qsd-c81=""
                    className="market_section ng-star-inserted"
                  >
                    <p _ngcontent-qsd-c81="">
                      <span _ngcontent-qsd-c81="" className="mrkname">
                        Match Odds
                      </span>

                      <a
                        _ngcontent-qsd-c81=""
                        href="javascript:void(0);"
                        className="add-pin ng-star-inserted"
                      >
                        <i _ngcontent-qsd-c81="" className="bi bi-bookmark" />
                      </a>

                      <button
                        _ngcontent-qsd-c81=""
                        className="btn-cashout ng-star-inserted"
                      >
                        cashout
                      </button>

                      <span _ngcontent-qsd-c81="" className="min-max">
                        {" "}
                        Min: - | Max: 1{" "}
                        <a
                          _ngcontent-qsd-c81=""
                          href="javascript:void(0)"
                          className="ms-2 game-rules-icon"
                        >
                          <span _ngcontent-qsd-c81="">
                            <i
                              _ngcontent-qsd-c81=""
                              className="bi bi-info-square-fill"
                            />
                          </span>
                        </a>
                        <a
                          _ngcontent-qsd-c81=""
                          href="#Match_Odds"
                          data-bs-toggle="collapse"
                          aria-expanded="true"
                          className="collapsed an-collapse"
                        />
                      </span>
                    </p>
                    <div
                      _ngcontent-qsd-c81=""
                      id="Match_Odds"
                      className="collapse show"
                    >
                      <app-market-detail
                        _ngcontent-qsd-c81=""
                        _nghost-qsd-c76=""
                      >
                        <div _ngcontent-qsd-c76="" className="ng-star-inserted">
                          <div
                            _ngcontent-qsd-c76=""
                            className="row align-items-center oddsHeader"
                          >
                            <div
                              _ngcontent-qsd-c76=""
                              className="col-lg-6 col-md-5 col-8 px-0"
                            />
                            <div
                              _ngcontent-qsd-c76=""
                              className="col-lg-6 col-md-7 col-4 px-0"
                            >
                              <div _ngcontent-qsd-c76="" className="btn-group">
                                <button
                                  _ngcontent-qsd-c76=""
                                  className="ex-bl d-none d-md-block"
                                />
                                <button
                                  _ngcontent-qsd-c76=""
                                  className="ex-bl d-none d-md-block"
                                />
                                <button _ngcontent-qsd-c76="" className="back">
                                  back
                                </button>
                                <button _ngcontent-qsd-c76="" className="lay">
                                  lay
                                </button>
                                <button
                                  _ngcontent-qsd-c76=""
                                  className="ex-bl d-none d-md-block"
                                />
                                <button
                                  _ngcontent-qsd-c76=""
                                  className="ex-bl d-none d-md-block"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            _ngcontent-qsd-c76=""
                            className="row mx-0 align-items-center ng-star-inserted"
                          >
                            <div
                              _ngcontent-qsd-c76=""
                              className="col-lg-6 col-md-5 col-8 px-0"
                            >
                              <span
                                _ngcontent-qsd-c76=""
                                className="marketevent"
                              >
                                Northern Knights
                              </span>
                            </div>
                            <div
                              _ngcontent-qsd-c76=""
                              className="col-lg-6 col-md-7 col-4 px-0"
                            >
                              <div _ngcontent-qsd-c76="" className="btn-group">
                                <button
                                  _ngcontent-qsd-c76=""
                                  className="back back-light d-md-block d-none"
                                >
                                  <span _ngcontent-qsd-c76="">1.62</span>
                                  <small _ngcontent-qsd-c76="">2.56</small>
                                </button>
                                <button
                                  _ngcontent-qsd-c76=""
                                  className="back back-light d-md-block d-none"
                                >
                                  <span _ngcontent-qsd-c76="">1.66</span>
                                  <small _ngcontent-qsd-c76="">14.23</small>
                                </button>
                                <button _ngcontent-qsd-c76="" className="back">
                                  <span _ngcontent-qsd-c76="">1.83</span>
                                  <small _ngcontent-qsd-c76="">9.14</small>
                                </button>
                                <button _ngcontent-qsd-c76="" className="lay">
                                  <span _ngcontent-qsd-c76="">1.89</span>
                                  <small _ngcontent-qsd-c76="">262.86</small>
                                </button>
                                <button
                                  _ngcontent-qsd-c76=""
                                  className="d-md-block d-none lay lay-light"
                                >
                                  <span _ngcontent-qsd-c76="">1.92</span>
                                  <small _ngcontent-qsd-c76="">39.22</small>
                                </button>
                                <button
                                  _ngcontent-qsd-c76=""
                                  className="d-md-block d-none lay lay-light"
                                >
                                  <span _ngcontent-qsd-c76="">1.93</span>
                                  <small _ngcontent-qsd-c76="">39.22</small>
                                </button>

                                <div
                                  _ngcontent-qsd-c76=""
                                  className="suspended ng-star-inserted"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            _ngcontent-qsd-c76=""
                            className="row mx-0 align-items-center ng-star-inserted"
                          >
                            <div
                              _ngcontent-qsd-c76=""
                              className="col-lg-6 col-md-5 col-8 px-0"
                            >
                              <span
                                _ngcontent-qsd-c76=""
                                className="marketevent"
                              >
                                Munster Reds
                              </span>
                            </div>
                            <div
                              _ngcontent-qsd-c76=""
                              className="col-lg-6 col-md-7 col-4 px-0"
                            >
                              <div _ngcontent-qsd-c76="" className="btn-group">
                                <button
                                  _ngcontent-qsd-c76=""
                                  className="back back-light d-md-block d-none"
                                >
                                  <span _ngcontent-qsd-c76="">2.06</span>
                                  <small _ngcontent-qsd-c76="">73.67</small>
                                </button>
                                <button
                                  _ngcontent-qsd-c76=""
                                  className="back back-light d-md-block d-none"
                                >
                                  <span _ngcontent-qsd-c76="">2.08</span>
                                  <small _ngcontent-qsd-c76="">36.2</small>
                                </button>
                                <button _ngcontent-qsd-c76="" className="back">
                                  <span _ngcontent-qsd-c76="">2.12</span>
                                  <small _ngcontent-qsd-c76="">234.34</small>
                                </button>
                                <button _ngcontent-qsd-c76="" className="lay">
                                  <span _ngcontent-qsd-c76="">2.2</span>
                                  <small _ngcontent-qsd-c76="">7.61</small>
                                </button>
                                <button
                                  _ngcontent-qsd-c76=""
                                  className="d-md-block d-none lay lay-light"
                                >
                                  <span _ngcontent-qsd-c76="">2.5</span>
                                  <small _ngcontent-qsd-c76="">6.4</small>
                                </button>
                                <button
                                  _ngcontent-qsd-c76=""
                                  className="d-md-block d-none lay lay-light"
                                >
                                  <span _ngcontent-qsd-c76="">2.52</span>
                                  <small _ngcontent-qsd-c76="">3.03</small>
                                </button>

                                <div
                                  _ngcontent-qsd-c76=""
                                  className="suspended ng-star-inserted"
                                />
                              </div>
                            </div>
                          </div>

                          <div
                            _ngcontent-qsd-c76=""
                            className="row mx-0 align-items-center"
                          >
                            <div
                              _ngcontent-qsd-c76=""
                              className="col-12 text-right px-0 ng-star-inserted"
                            >
                              <span _ngcontent-qsd-c76="" className="msgs">
                                <marquee _ngcontent-qsd-c76="">
                                  <i
                                    _ngcontent-qsd-c76=""
                                    className="mdi mdi-email mr-1"
                                  />{" "}
                                  🏆 Icc World T20 Cup Winner 🏆 Bets Started In
                                  Our Exchange🏏{" "}
                                </marquee>
                              </span>
                            </div>
                          </div>
                        </div>
                      </app-market-detail>
                    </div>
                  </div>

                  <div _ngcontent-qsd-c81="" className="ng-star-inserted">
                    <div
                      _ngcontent-qsd-c81=""
                      className="market_section ng-star-inserted"
                    >
                      <div _ngcontent-qsd-c81="" className="ng-star-inserted">
                        <p _ngcontent-qsd-c81="">
                          <span _ngcontent-qsd-c81="" className="mrkname">
                            BOOKMAKER
                          </span>

                          <a
                            _ngcontent-qsd-c81=""
                            href="javascript:void(0)"
                            className="add-pin ng-star-inserted"
                          >
                            <i
                              _ngcontent-qsd-c81=""
                              className="bi bi-bookmark"
                            />
                          </a>

                          <button
                            _ngcontent-qsd-c81=""
                            className="btn-cashout ng-star-inserted"
                          >
                            cashout
                          </button>

                          <span _ngcontent-qsd-c81="" className="min-max">
                            {" "}
                            Min: 100 | Max: 25k{" "}
                            <a
                              _ngcontent-qsd-c81=""
                              href="javascript:void(0)"
                              className="ms-2 game-rules-icon"
                            >
                              <span _ngcontent-qsd-c81="">
                                <i
                                  _ngcontent-qsd-c81=""
                                  className="bi bi-info-square-fill"
                                />
                              </span>
                            </a>
                            <a
                              _ngcontent-qsd-c81=""
                              data-bs-toggle="collapse"
                              aria-expanded="true"
                              className="collapsed an-collapse"
                              href="#bookmaker0"
                            />
                          </span>
                        </p>
                        <div
                          _ngcontent-qsd-c81=""
                          className="collapse show"
                          id="bookmaker0"
                        >
                          <app-bookmaker-detail
                            _ngcontent-qsd-c81=""
                            _nghost-qsd-c77=""
                          >
                            <div
                              _ngcontent-qsd-c77=""
                              className="ng-star-inserted"
                            >
                              <div
                                _ngcontent-qsd-c77=""
                                className="row align-items-center oddsHeader"
                              >
                                <div
                                  _ngcontent-qsd-c77=""
                                  className="col-lg-6 col-md-5 col-8 px-0"
                                />
                                <div
                                  _ngcontent-qsd-c77=""
                                  className="col-lg-6 col-md-7 col-4 px-0"
                                >
                                  <div
                                    _ngcontent-qsd-c77=""
                                    className="btn-group"
                                  >
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="ex-bl d-none d-md-block"
                                    />
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="ex-bl d-none d-md-block"
                                    />
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="back"
                                    >
                                      back
                                    </button>
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="lay"
                                    >
                                      lay
                                    </button>
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="ex-bl d-none d-md-block"
                                    />
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="ex-bl d-none d-md-block"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                _ngcontent-qsd-c77=""
                                className="row mx-0 align-items-center ng-star-inserted"
                              >
                                <div
                                  _ngcontent-qsd-c77=""
                                  className="col-lg-6 col-md-5 col-8 px-0"
                                >
                                  <span
                                    _ngcontent-qsd-c77=""
                                    className="marketevent"
                                  >
                                    Northern Knights
                                  </span>
                                </div>
                                <div
                                  _ngcontent-qsd-c77=""
                                  className="col-lg-6 col-md-7 col-4 px-0"
                                >
                                  <div
                                    _ngcontent-qsd-c77=""
                                    className="btn-group"
                                  >
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="back back-light d-md-block d-none"
                                    >
                                      <span _ngcontent-qsd-c77="">-</span>
                                      <small _ngcontent-qsd-c77="">0.0</small>
                                    </button>
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="back back-light d-md-block d-none"
                                    >
                                      <span _ngcontent-qsd-c77="">-</span>
                                      <small _ngcontent-qsd-c77="">0.0</small>
                                    </button>
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="back"
                                    >
                                      <span _ngcontent-qsd-c77="">82</span>
                                      <small _ngcontent-qsd-c77="">25k</small>
                                    </button>
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="lay"
                                    >
                                      <span _ngcontent-qsd-c77="">90</span>
                                      <small _ngcontent-qsd-c77="">25k</small>
                                    </button>
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="d-md-block d-none lay lay-light"
                                    >
                                      <span _ngcontent-qsd-c77="">-</span>
                                      <small _ngcontent-qsd-c77="">0.0</small>
                                    </button>
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="d-md-block d-none lay lay-light"
                                    >
                                      <span _ngcontent-qsd-c77="">-</span>
                                      <small _ngcontent-qsd-c77="">0.0</small>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div
                                _ngcontent-qsd-c77=""
                                className="row mx-0 align-items-center ng-star-inserted"
                              >
                                <div
                                  _ngcontent-qsd-c77=""
                                  className="col-lg-6 col-md-5 col-8 px-0"
                                >
                                  <span
                                    _ngcontent-qsd-c77=""
                                    className="marketevent"
                                  >
                                    Munster Reds
                                  </span>
                                </div>
                                <div
                                  _ngcontent-qsd-c77=""
                                  className="col-lg-6 col-md-7 col-4 px-0"
                                >
                                  <div
                                    _ngcontent-qsd-c77=""
                                    className="btn-group"
                                  >
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="back back-light d-md-block d-none"
                                    >
                                      <span _ngcontent-qsd-c77="">-</span>
                                      <small _ngcontent-qsd-c77="">0.0</small>
                                    </button>
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="back back-light d-md-block d-none"
                                    >
                                      <span _ngcontent-qsd-c77="">-</span>
                                      <small _ngcontent-qsd-c77="">0.0</small>
                                    </button>
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="back"
                                    >
                                      <span _ngcontent-qsd-c77="">0</span>
                                      <small _ngcontent-qsd-c77="">0.0</small>
                                    </button>
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="lay"
                                    >
                                      <span _ngcontent-qsd-c77="">0</span>
                                      <small _ngcontent-qsd-c77="">0.0</small>
                                    </button>
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="d-md-block d-none lay lay-light"
                                    >
                                      <span _ngcontent-qsd-c77="">-</span>
                                      <small _ngcontent-qsd-c77="">0.0</small>
                                    </button>
                                    <button
                                      _ngcontent-qsd-c77=""
                                      className="d-md-block d-none lay lay-light"
                                    >
                                      <span _ngcontent-qsd-c77="">-</span>
                                      <small _ngcontent-qsd-c77="">0.0</small>
                                    </button>
                                    <div
                                      _ngcontent-qsd-c77=""
                                      className="suspended ng-star-inserted"
                                    >
                                      {" "}
                                      suspended
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                _ngcontent-qsd-c77=""
                                className="row mx-0 align-items-center ng-star-inserted"
                              >
                                <div
                                  _ngcontent-qsd-c77=""
                                  className="col-12 text-right px-0"
                                >
                                  <span _ngcontent-qsd-c77="" className="msgs">
                                    <marquee _ngcontent-qsd-c77="">
                                      <i
                                        _ngcontent-qsd-c77=""
                                        className="mdi mdi-email mr-1"
                                      />{" "}
                                      KARACHI KINGS SRL V MULTAN SULTANS SRL
                                      :Match Bets Started In Our Exchange🏏(P){" "}
                                    </marquee>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </app-bookmaker-detail>
                        </div>
                      </div>
                    </div>
                  </div>

                  <tabset
                    _ngcontent-qsd-c81=""
                    className="newtab_collect tab-container ng-star-inserted"
                    _nghost-qsd-c38=""
                  >
                    <ul
                      _ngcontent-qsd-c38=""
                      role="tablist"
                      className="nav nav-tabs"
                      aria-label="Tabs"
                    >
                      <li
                        _ngcontent-qsd-c38=""
                        className="active nav-item ng-star-inserted"
                      >
                        <a
                          _ngcontent-qsd-c38=""
                          href="javascript:void(0);"
                          role="tab"
                          className="nav-link active"
                          aria-controls=""
                          aria-selected="true"
                          id=""
                        >
                          <span _ngcontent-qsd-c38="" />
                          <span
                            _ngcontent-qsd-c81=""
                            className="ng-star-inserted"
                          >
                            Fancy
                          </span>
                        </a>
                      </li>
                    </ul>
                    <div _ngcontent-qsd-c38="" className="tab-content">
                      <tab
                        _ngcontent-qsd-c81=""
                        role="tabpanel"
                        aria-labelledby=""
                        className="tab-pane active"
                      >
                        <div
                          _ngcontent-qsd-c81=""
                          className="market_section twoOddsSection ng-star-inserted"
                        >
                          <div _ngcontent-qsd-c81="" className="fancy-tab">
                            <tabset
                              _ngcontent-qsd-c81=""
                              type="tabs fancy-subtabs"
                              _nghost-qsd-c38=""
                              className="tab-container"
                            >
                              <ul
                                _ngcontent-qsd-c38=""
                                role="tablist"
                                className="nav nav-tabs fancy-subtabs"
                                aria-label="Tabs"
                              >
                                <li
                                  _ngcontent-qsd-c38=""
                                  className="active nav-item ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-qsd-c38=""
                                    href="javascript:void(0);"
                                    role="tab"
                                    className="nav-link active"
                                    aria-controls=""
                                    aria-selected="true"
                                    id=""
                                  >
                                    <span _ngcontent-qsd-c38="">all</span>
                                  </a>
                                </li>
                                <li
                                  _ngcontent-qsd-c38=""
                                  className="nav-item ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-qsd-c38=""
                                    href="javascript:void(0);"
                                    role="tab"
                                    className="nav-link"
                                    aria-controls=""
                                    aria-selected="false"
                                    id=""
                                  >
                                    <span _ngcontent-qsd-c38="">sessions</span>
                                  </a>
                                </li>
                                <li
                                  _ngcontent-qsd-c38=""
                                  className="nav-item ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-qsd-c38=""
                                    href="javascript:void(0);"
                                    role="tab"
                                    className="nav-link"
                                    aria-controls=""
                                    aria-selected="false"
                                    id=""
                                  >
                                    <span _ngcontent-qsd-c38="">
                                      w/p market
                                    </span>
                                  </a>
                                </li>
                                <li
                                  _ngcontent-qsd-c38=""
                                  className="nav-item ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-qsd-c38=""
                                    href="javascript:void(0);"
                                    role="tab"
                                    className="nav-link"
                                    aria-controls=""
                                    aria-selected="false"
                                    id=""
                                  >
                                    <span _ngcontent-qsd-c38="">odd/even</span>
                                  </a>
                                </li>
                                <li
                                  _ngcontent-qsd-c38=""
                                  className="nav-item ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-qsd-c38=""
                                    href="javascript:void(0);"
                                    role="tab"
                                    className="nav-link"
                                    aria-controls=""
                                    aria-selected="false"
                                    id=""
                                  >
                                    <span _ngcontent-qsd-c38="">
                                      xtra market
                                    </span>
                                  </a>
                                </li>
                              </ul>
                              <div
                                _ngcontent-qsd-c38=""
                                className="tab-content"
                              >
                                <tab
                                  _ngcontent-qsd-c81=""
                                  role="tabpanel"
                                  aria-labelledby=""
                                  className="tab-pane active ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-qsd-c81=""
                                    className="ng-star-inserted"
                                  >
                                    <app-fancy-detail
                                      _ngcontent-qsd-c81=""
                                      _nghost-qsd-c78=""
                                    >
                                      <div
                                        _ngcontent-qsd-c78=""
                                        className="fancy-tab-content ng-star-inserted"
                                      >
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="row align-items-center oddsHeader"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-6 col-md-6 col-8 px-0"
                                          />
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                          />
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-2 col-md-2 col-4 px-0"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="btn-group"
                                            >
                                              <button
                                                _ngcontent-qsd-c78=""
                                                className="lay w-100"
                                              >
                                                no
                                              </button>
                                              <button
                                                _ngcontent-qsd-c78=""
                                                className="back w-100"
                                              >
                                                yes
                                              </button>
                                            </div>
                                          </div>
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                          />
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      10 Over Runs NK
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        39
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        115
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        39
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        85
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 25k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      43 Over Runs NK
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        218
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        100
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        221
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        100
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      Only 9th Over Runs NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      Fall of 1st wkt Runs NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      S Topping Runs
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        24
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        110
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        24
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        90
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      J McCollum Runs
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      S Topping Boundaries{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        2
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        100
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        3
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        100
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      J McCollum Boundaries{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      1st wkt pship Boundaries
                                                      NK
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      1st wkt Caught Out NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      10 Over Odd Run Bhav NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      10 Over Even Run Bhav NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        1
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        98
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      20 Over Odd Run Bhav NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        1
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        98
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      20 Over Even Run Bhav NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        1
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        98
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      30 Over Odd Run Bhav NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        1
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        98
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      30 Over Even Run Bhav NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        1
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        98
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </app-fancy-detail>
                                  </div>
                                </tab>
                                <tab
                                  _ngcontent-qsd-c81=""
                                  role="tabpanel"
                                  aria-labelledby=""
                                  className="tab-pane ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-qsd-c81=""
                                    className="ng-star-inserted"
                                  >
                                    <app-fancy-detail
                                      _ngcontent-qsd-c81=""
                                      _nghost-qsd-c78=""
                                    >
                                      <div
                                        _ngcontent-qsd-c78=""
                                        className="fancy-tab-content ng-star-inserted"
                                      >
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="row align-items-center oddsHeader"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-6 col-md-6 col-8 px-0"
                                          />
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                          />
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-2 col-md-2 col-4 px-0"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="btn-group"
                                            >
                                              <button
                                                _ngcontent-qsd-c78=""
                                                className="lay w-100"
                                              >
                                                no
                                              </button>
                                              <button
                                                _ngcontent-qsd-c78=""
                                                className="back w-100"
                                              >
                                                yes
                                              </button>
                                            </div>
                                          </div>
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                          />
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      10 Over Runs NK
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        39
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        115
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        39
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        85
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 25k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      43 Over Runs NK
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        218
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        100
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        221
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        100
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      Only 9th Over Runs NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                      </div>
                                    </app-fancy-detail>
                                  </div>
                                </tab>
                                <tab
                                  _ngcontent-qsd-c81=""
                                  role="tabpanel"
                                  aria-labelledby=""
                                  className="tab-pane ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-qsd-c81=""
                                    className="ng-star-inserted"
                                  >
                                    <app-fancy-detail
                                      _ngcontent-qsd-c81=""
                                      _nghost-qsd-c78=""
                                    >
                                      <div
                                        _ngcontent-qsd-c78=""
                                        className="fancy-tab-content ng-star-inserted"
                                      >
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="row align-items-center oddsHeader"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-6 col-md-6 col-8 px-0"
                                          />
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                          />
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-2 col-md-2 col-4 px-0"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="btn-group"
                                            >
                                              <button
                                                _ngcontent-qsd-c78=""
                                                className="lay w-100"
                                              >
                                                no
                                              </button>
                                              <button
                                                _ngcontent-qsd-c78=""
                                                className="back w-100"
                                              >
                                                yes
                                              </button>
                                            </div>
                                          </div>
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                          />
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      Fall of 1st wkt Runs NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      S Topping Runs
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        24
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        110
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        24
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        90
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      J McCollum Runs
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      S Topping Boundaries{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        2
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        100
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        3
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        100
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      J McCollum Boundaries{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      1st wkt pship Boundaries
                                                      NK
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                      </div>
                                    </app-fancy-detail>
                                  </div>
                                </tab>
                                <tab
                                  _ngcontent-qsd-c81=""
                                  role="tabpanel"
                                  aria-labelledby=""
                                  className="tab-pane ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-qsd-c81=""
                                    className="ng-star-inserted"
                                  >
                                    <app-fancy-detail
                                      _ngcontent-qsd-c81=""
                                      _nghost-qsd-c78=""
                                    >
                                      <div
                                        _ngcontent-qsd-c78=""
                                        className="fancy-tab-content ng-star-inserted"
                                      >
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="row align-items-center oddsHeader"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-6 col-md-6 col-8 px-0"
                                          />
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                          />
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-2 col-md-2 col-4 px-0"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="btn-group"
                                            >
                                              <button
                                                _ngcontent-qsd-c78=""
                                                className="lay w-100"
                                              >
                                                no
                                              </button>
                                              <button
                                                _ngcontent-qsd-c78=""
                                                className="back w-100"
                                              >
                                                yes
                                              </button>
                                            </div>
                                          </div>
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                          />
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      10 Over Odd Run Bhav NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      10 Over Even Run Bhav NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        1
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        98
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      20 Over Odd Run Bhav NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        1
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        98
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      20 Over Even Run Bhav NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        1
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        98
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      30 Over Odd Run Bhav NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        1
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        98
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      30 Over Even Run Bhav NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        1
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        98
                                                      </small>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </app-fancy-detail>
                                  </div>
                                </tab>
                                <tab
                                  _ngcontent-qsd-c81=""
                                  role="tabpanel"
                                  aria-labelledby=""
                                  className="tab-pane ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-qsd-c81=""
                                    className="ng-star-inserted"
                                  >
                                    <app-fancy-detail
                                      _ngcontent-qsd-c81=""
                                      _nghost-qsd-c78=""
                                    >
                                      <div
                                        _ngcontent-qsd-c78=""
                                        className="fancy-tab-content ng-star-inserted"
                                      >
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="row align-items-center oddsHeader"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-6 col-md-6 col-8 px-0"
                                          />
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                          />
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-2 col-md-2 col-4 px-0"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="btn-group"
                                            >
                                              <button
                                                _ngcontent-qsd-c78=""
                                                className="lay w-100"
                                              >
                                                no
                                              </button>
                                              <button
                                                _ngcontent-qsd-c78=""
                                                className="back w-100"
                                              >
                                                yes
                                              </button>
                                            </div>
                                          </div>
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                          />
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-qsd-c78=""
                                            className="ng-star-inserted"
                                          >
                                            <div
                                              _ngcontent-qsd-c78=""
                                              className="row mx-0 align-items-center tablist-content ng-star-inserted"
                                            >
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-6 col-md-6 col-7 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="d-flex align-items-center"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="name_of_fancy"
                                                  >
                                                    <a
                                                      _ngcontent-qsd-c78=""
                                                      href="javascript:void(0)"
                                                      className="add-pin ng-star-inserted"
                                                    >
                                                      <i
                                                        _ngcontent-qsd-c78=""
                                                        className="bi bi-bookmark"
                                                      />
                                                    </a>

                                                    <span
                                                      _ngcontent-qsd-c78=""
                                                      className="marketevent"
                                                    >
                                                      {" "}
                                                      1st wkt Caught Out NK{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-1 px-0"
                                              ></div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0"
                                              >
                                                <div
                                                  _ngcontent-qsd-c78=""
                                                  className="cs-cls"
                                                >
                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="btn-group"
                                                  >
                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="lay w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>

                                                    <button
                                                      _ngcontent-qsd-c78=""
                                                      className="back w-100 ng-star-inserted"
                                                    >
                                                      <span _ngcontent-qsd-c78="">
                                                        0.00
                                                      </span>
                                                      <small _ngcontent-qsd-c78="">
                                                        0.00
                                                      </small>
                                                    </button>
                                                  </div>

                                                  <div
                                                    _ngcontent-qsd-c78=""
                                                    className="suspended ng-star-inserted"
                                                  >
                                                    suspended
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                _ngcontent-qsd-c78=""
                                                className="col-lg-2 col-md-2 col-4 px-0 d-none d-md-block"
                                              >
                                                <button
                                                  _ngcontent-qsd-c78=""
                                                  className="two-odds-min-max"
                                                >
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Bet: 100
                                                  </span>
                                                  <span
                                                    _ngcontent-qsd-c78=""
                                                    className="d-block"
                                                  >
                                                    Max Market: 10k
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                        <div
                                          _ngcontent-qsd-c78=""
                                          className="fancy-detail-list ng-star-inserted"
                                        ></div>
                                      </div>
                                    </app-fancy-detail>
                                  </div>
                                </tab>
                              </div>
                            </tabset>
                          </div>
                        </div>
                      </tab>
                    </div>
                  </tabset>

                  <div _ngcontent-qsd-c81="" className="empty1">
                    <div
                      _ngcontent-qsd-c81=""
                      className="market_section ng-star-inserted"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              _ngcontent-qsd-c81=""
              className="col-md-12 col-lg-4 detail-right-column d-none d-lg-block px-0"
            >
              <app-bet-slip _ngcontent-qsd-c81="" _nghost-qsd-c74="">
                <div _ngcontent-qsd-c74="" className="card mb-1 place-bet">
                  <div _ngcontent-qsd-c74="" className="card-header">
                    <h6
                      _ngcontent-qsd-c74=""
                      className="card-header game-heading"
                    >
                      Place Bet
                    </h6>
                  </div>
                </div>
              </app-bet-slip>
            </div>
          </div>
        </section>
      </app-sport-detail>
    </main>
  );
};

export default MatchDetails;
