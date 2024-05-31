import React from "react";
import GameContent from "../../content/GameContent";
import Loader from "../../../../../Helpers/Loader";
import { get_Time_From_Unix_Dete_string } from "../../../../../Helpers/Date_formet";
import { Link } from "react-router-dom";
import Dashboard from "../../../Helper/Dashboard";

const LiveMatches = ({ data, isLoading, matchDetails }) => {
  let filterData = data && data.filter((row) => row.status_str === "Live");

  return (
    <div>
      <Dashboard
        data={filterData}
        isLoading={isLoading}
        matchDetails={matchDetails}
      />
    </div>
  );
};

export default LiveMatches;
