import React from "react";
import Content from "../../../Layout/Content/Content";
import Widget from "../../../Helpers/Widgets";

const Dashboard = () => {
  return (
    <div>
      <div className="flapt-page-content">
        <div class="main-panel">
          <div className="content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <Widget sm={"col-sm-6 col-xl-3 mb-30"} color="bg-purple " />
                <Widget sm={"col-sm-6 col-xl-3 mb-30"} color="bg-success" />
                <Widget sm={"col-sm-6 col-xl-3 mb-30"} color="bg-danger" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
