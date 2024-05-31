import React from "react";
import Dashboard from "../../../Helper/Dashboard";

const LiveMatches = ({ data, isLoading }) => {
  let filterData = data && data.filter((row) => row.status_str === "Scheduled");

  return (
    <div>
      <Dashboard data={filterData} isLoading={isLoading} showUpcoming={true} />
    </div>
  );
};

export default LiveMatches;
