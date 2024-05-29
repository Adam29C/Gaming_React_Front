import React, { useEffect, useState } from "react";
import GameContent from "../content/GameContent";
import { useDispatch, useSelector } from "react-redux";
import { getAllMatches } from "../../../../Redux/Slice/User/user.slice";
import moment from "moment/moment";
import { v4 } from "uuid";
import { Generate_Token } from "../../../../Redux/Slice/Auth/auth.slice";
import { get_Time_From_Unix_Dete_string } from "../../../../Helpers/Date_formet";
import { Link } from "react-router-dom";
import Loader from "../../../../Helpers/Loader";
const MainContent = () => {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const { getAllMatchListState, isLoading } = useSelector(
    (state) => state.UserSlice
  );
  const data = getAllMatchListState?.data?.response?.items;


  useEffect(() => {
    const getToken = async () => {
      const request1 = { deviceId: v4() };
      try {
        const res1 = await dispatch(Generate_Token(request1)).unwrap();
        if (res1.statusCode === 200) {
          setToken(res1.data);
          await dispatch(getAllMatches(res1.data)).unwrap();
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getToken();
  }, [dispatch]);

  useEffect(() => {
    if (!token) return;

    let controller = new AbortController();

    const getMatchList = async () => {
      try {
        controller.abort();
        controller = new AbortController();
        const signal = controller.signal;
        await dispatch(getAllMatches(token), { signal }).unwrap();
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    const intervalId = setInterval(getMatchList, 5000);

    return () => {
      controller.abort();
      clearInterval(intervalId);
    };
  }, [dispatch, token]);

  return (
    <>
      <GameContent title="Cricket">
        {isLoading && <Loader lodersize={25} />}
        {data &&
          data
            ?.filter((row) => row.status_str === "Live")
            .map((row, index) => (
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
                              ({row?.competition.title ? row?.competition.title: "_"})
                            </p>
                          </Link>
                        </div>
                        <div className="game-date inplay">
                          <span>Live</span>
                        </div>
                        <div className="game-date">
                          <p className="mb-0 day text-left">
                            {get_Time_From_Unix_Dete_string(
                              row?.timestamp_start
                            )}
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
    </>
  );
};

export default MainContent;
