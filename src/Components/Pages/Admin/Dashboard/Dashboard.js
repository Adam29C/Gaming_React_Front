import React, { useEffect, useState } from "react";
import Content from "../../../Layout/Content/Content";
import Widget from "../../../Helpers/Widgets";
import { SUB_ADMIN_DASHBOARD_COUNT_API } from "../../../Service/admin.service";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const ROLES = JSON.parse(localStorage.getItem("roles"));
  const [data, setData] = useState({});

  const getSubAdminDashboardCount = async () => {
    const res = await SUB_ADMIN_DASHBOARD_COUNT_API(userId, token);
    setData(res?.data);
  };

 useEffect(() => {
    if (parseInt(ROLES) == 1) {
      getSubAdminDashboardCount();
    }
  }, []);
  return (
    <div>
      <Content title="Admin Dashboad"> 
      <div className="row">
                <Widget
                  sm={"col-sm-6 col-xl-3 mb-30"}
                  color="bg-purple "
                  title="Total Admins"
                  value="0"
                />
                <Widget
                  sm={"col-sm-6 col-xl-3 mb-30"}
                  color="bg-success"
                  title="Verified Admins"
                  value="0"
                />
                <Widget
                  sm={"col-sm-6 col-xl-3 mb-30"}
                  color="bg-danger"
                  title="Not Verified Admins"
                  value="0"
                />
              </div>
      </Content>
    </div>
  );
};

export default Dashboard;
