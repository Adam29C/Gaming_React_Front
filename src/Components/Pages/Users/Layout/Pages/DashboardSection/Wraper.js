import React, { useState, useEffect } from "react";
import LiveMatches from "./LiveMatches";
import UpcomingMatches from "./UpcomingMatches";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMatches,
  getMatchDetails,
} from "../../../../../Redux/Slice/User/gamingapi.slice";
import { v4 } from "uuid";
import { Generate_Token } from "../../../../../Redux/Slice/Auth/auth.slice";

const Wraper = () => {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  const { getAllMatchListState, getMatchDetailsState, isLoading } = useSelector(
    (state) => state.GamingSlice
  );
  const data = getAllMatchListState?.data?.response?.items;
  const matchDetails = getMatchDetailsState.data?.response;




  console.log("datadata" ,data);
  useEffect(() => {
    const getToken = async () => {
      const request1 = { deviceId: v4() };
      try {
        const res1 = await dispatch(Generate_Token(request1)).unwrap();
        if (res1.statusCode === 200) {
          setToken(res1.data);
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
        const response = await dispatch(getAllMatches(token), {
          signal,
        }).unwrap();

        if (response.statusCode == 200) {
          response.data?.response?.items.map(async (item) => {
            await getMatchDetailsFun(item.match_id, token);
          });
        }
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    // const intervalId = setInterval(getMatchList, 5000);

    getMatchList();
    return () => {
      controller.abort();
      // clearInterval(intervalId);
    };
  }, [dispatch, token]);

  const getMatchDetailsFun = async (id) => {
    await dispatch(getMatchDetails({ id: id, token: token })).unwrap();
  };

  return (
    <div>
      <LiveMatches
        data={data}
        matchDetails={matchDetails}
        isLoading={isLoading}
      />
      <UpcomingMatches
        data={data}
        matchDetails={matchDetails}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Wraper;
