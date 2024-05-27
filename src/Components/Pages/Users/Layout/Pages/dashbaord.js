import React, { useEffect, useState } from "react";
import GameContent from "../content/GameContent";
import { useDispatch, useSelector } from "react-redux";
import { getAllMatches } from "../../../../Redux/Slice/User/user.slice";
import moment from "moment/moment";
import { v4 } from "uuid";
import { Generate_Token } from "../../../../Redux/Slice/Auth/auth.slice";

const MainContent = () => {
  const [token, setToken] = useState("");
  const dispatch = useDispatch()
  const {getAllMatchListState} =useSelector((state)=>state.UserSlice)
  const data = getAllMatchListState?.data?.response?.items



useEffect(() => {
  const getToken = async () => {
    const request1 = { deviceId: v4() };
    try {
      const res1 = await dispatch(Generate_Token(request1)).unwrap();
      if (res1.statusCode === 200) {
        const token = res1.data;
        setToken(token);
        await dispatch(getAllMatches(token)).unwrap();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  getToken();
}, [dispatch]);


  return (
    <GameContent title="Cricket">
      {data?.map((row, index) => (
        <div _ngcontent-jgm-c70="" className="bet-table-row" key={index}>
          <div _ngcontent-jgm-c70="" className="row">
            <div _ngcontent-jgm-c70="" className="col-md-6">
              <div _ngcontent-jgm-c70="" className="game-box">
                <div _ngcontent-jgm-c70="" className="game-left-col">
                  <div _ngcontent-jgm-c70="" className="game-name">
                    <a _ngcontent-jgm-c70="" href="javascript:void(0)">
                      <p _ngcontent-jgm-c70="" className="team-name text-left">
                        {row?.title ? row?.title : " _ "}
                      </p>
                      <p
                        _ngcontent-jgm-c70=""
                        className="team-name text-left team-event"
                      >
                        {row?.short_title ? row?.short_title : "_"}
                      </p>
                    </a>
                  </div>
                  <div _ngcontent-jgm-c70="" className="game-date inplay">
                    <span _ngcontent-jgm-c70="">Live</span>
                  </div>
                  {/**/}
                  <div _ngcontent-jgm-c70="" className="game-date">
                    <p _ngcontent-jgm-c70="" className="mb-0 day text-left">
                      {/* 01 Mar <br/>
                      04:30 PM */}
                      {moment
                        .unix(row?.timestamp_start)
                        .format("DD MMM hh:mm A")}
                    </p>
                  </div>
                </div>
                <div _ngcontent-jgm-c70="" className="game-icons">
                  <div
                    _ngcontent-jgm-c70=""
                    className="match-icons-main game-icons"
                  >
                    <a
                      _ngcontent-jgm-c70=""
                      href="javascript:void(0);"
                      className="match-icons"
                    >
                      <img
                        _ngcontent-jgm-c70=""
                        // src="assets/images/fancy.svg"
                        src={row?.teama?.logo_url}
                        alt=""
                      />
                    </a>
                    <a _ngcontent-jgm-c70="" href="javascript:void(0);">
                      <img
                        _ngcontent-jgm-c70=""
                        // src="assets/images/fancy.svg"
                        src={row?.teamb?.logo_url}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div _ngcontent-jgm-c70="" className="col-md-6 text-center">
              <div _ngcontent-jgm-c70="" className="row g-0">
                <div _ngcontent-jgm-c70="" className="col-md-4 col-4">
                  <div _ngcontent-jgm-c70="" className="h-backLay">
                    <div _ngcontent-jgm-c70="" className="back bl-box">
                      <span
                        _ngcontent-jgm-c70=""
                        className="d-block bet-button-price"
                      >
                        {" "}
                        - <em _ngcontent-jgm-c70="">-</em>
                      </span>
                    </div>
                    <div _ngcontent-jgm-c70="" className="bl-box lay">
                      <span
                        _ngcontent-jgm-c70=""
                        className="d-block bet-button-price"
                      >
                        {" "}
                        - <em _ngcontent-jgm-c70="">-</em>
                      </span>
                    </div>
                  </div>
                </div>
                <div _ngcontent-jgm-c70="" className="col-md-4 col-4">
                  <div _ngcontent-jgm-c70="" className="h-backLay">
                    <div _ngcontent-jgm-c70="" className="back bl-box">
                      <span
                        _ngcontent-jgm-c70=""
                        className="d-block bet-button-price"
                      >
                        {" "}
                        - <em _ngcontent-jgm-c70="">-</em>
                      </span>
                    </div>
                    <div _ngcontent-jgm-c70="" className="bl-box lay">
                      <span
                        _ngcontent-jgm-c70=""
                        className="d-block bet-button-price"
                      >
                        {" "}
                        - <em _ngcontent-jgm-c70="">-</em>
                      </span>
                    </div>
                  </div>
                </div>
                <div _ngcontent-jgm-c70="" className="col-md-4 col-4">
                  <div _ngcontent-jgm-c70="" className="h-backLay">
                    <div _ngcontent-jgm-c70="" className="back bl-box">
                      <span
                        _ngcontent-jgm-c70=""
                        className="d-block bet-button-price"
                      >
                        {" "}
                        - <em _ngcontent-jgm-c70="">-</em>
                      </span>
                    </div>
                    <div _ngcontent-jgm-c70="" className="bl-box lay">
                      <span
                        _ngcontent-jgm-c70=""
                        className="d-block bet-button-price"
                      >
                        {" "}
                        - <em _ngcontent-jgm-c70="">-</em>
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
  );
};

export default MainContent;
