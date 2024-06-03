import React from "react";
import GameContent from "../../../Pages/Users/Layout/content/GameContent";
import Loader from "../../../Helpers/Loader";
import { get_Time_From_Unix_Dete_string } from "../../../Helpers/Date_formet";
import { Link } from "react-router-dom";

const Dashboard = ({ data, isLoading, showUpcoming , matchDetails }) => {


  return (
    <div>
      <GameContent title="Cricket" showUpcoming={showUpcoming}>
        {isLoading && <Loader lodersize={25} />}
        {data &&
          data.map((row, index) => (
            <div className="bet-table-row" key={index}>
              <div className="row">
                <div className="col-md-6">
                  <div className="game-box">
                    <div className="game-left-col">
                      <div className="game-name">
                        <Link to={`match-details/${row.match_id}`}>
                          <p className="team-name text-left">
                            {row?.title ? row?.title : " _ "}
                          </p>
                          <p className="team-name text-left team-event">
                            (
                            {row?.competition.title
                              ? row?.competition.title
                              : "_"}
                            )
                          </p>
                        </Link>
                      </div>
                      <div className="game-date inplay">
                        <span>Live</span>
                      </div>
                      <div className="game-date">
                        <p className="mb-0 day text-left">
                          {get_Time_From_Unix_Dete_string(row?.timestamp_start)}
                        </p>
                      </div>
                    </div>
                    <div className="game-icons">
                      <div className="match-icons-main game-icons">
                        <a className="match-icons">
                          <img src={row?.teama?.logo_url} alt="" />
                        </a>
                        <a>
                          <img
                            // src="assets/images/fancy.svg"
                            src={row?.teamb?.logo_url}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <div className="row g-0">
                    <div className="col-md-4 col-4">
                      <div className="h-backLay">
                        <div className="back bl-box">
                          <span className="d-block bet-button-price">
                            - <em>-</em>
                          </span>
                        </div>
                        <div className="bl-box lay">
                          <span className="d-block bet-button-price">
                            - <em>-</em>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-4">
                      <div className="h-backLay">
                        <div className="back bl-box">
                          <span className="d-block bet-button-price">
                            - <em>-</em>
                          </span>
                        </div>
                        <div className="bl-box lay">
                          <span className="d-block bet-button-price">
                            - <em>-</em>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-4">
                      <div className="h-backLay">
                        <div className="back bl-box">
                          <span className="d-block bet-button-price">
                            - <em>-</em>
                          </span>
                        </div>
                        <div className="bl-box lay">
                          <span className="d-block bet-button-price">
                            - <em>-</em>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* </div> */}
      </GameContent>
    </div>
  );
};

export default Dashboard;
