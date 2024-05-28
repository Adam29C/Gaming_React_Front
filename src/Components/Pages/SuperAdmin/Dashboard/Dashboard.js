import React, { useEffect, useState } from "react";
import Content from "../../../Layout/Content/Content";
import Widget from "../../../Helpers/Widgets";
import { ADMIN_DASHBOARD_COUNT_API } from "../../../Service/superadmin.service";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const ROLES = JSON.parse(localStorage.getItem("roles"));
  const [data, setData] = useState({});

  const getAdminDashboardCount = async () => {
    const res = await ADMIN_DASHBOARD_COUNT_API(userId, token);
    setData(res?.data);
  };

  
  useEffect(() => {
    if (parseInt(ROLES) == 0) {
      getAdminDashboardCount();
    }
  }, []);

  return (
    <div>
      <div className="flapt-page-content">
        <div class="main-panel">
          <div className="content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <Widget
                  sm={"col-sm-6 col-xl-3 mb-30"}
                  color="bg-purple "
                  title="Total Admins"
                  value={data?.totalCount ? data?.totalCount : 0}
                />
                <Widget
                  sm={"col-sm-6 col-xl-3 mb-30"}
                  color="bg-success"
                  title="Verified Admins"
                  value={data?.verifiedCount ? data?.verifiedCount : 0}
                />
                <Widget
                  sm={"col-sm-6 col-xl-3 mb-30"}
                  color="bg-danger"
                  title="Not Verified Admins"
                  value={data?.notVerifiedCount ? data?.verifiedCount : 0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
