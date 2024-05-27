import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserChangePassword from "./UserChangePassword";
import { useDispatch, useSelector } from "react-redux";

import { getUserProfile } from "../../../../../Redux/Slice/User/user.slice";
import UserContent from "../../content/UserContent";

const UserProfile = () => {
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user_details")).id;
  const [activeTab, setActiveTab] = useState("Overview");
  const [data, setData] = useState();
  const dispatch = useDispatch();

  const getUserData = async () => {
    const data = {
      id: userId,
      token: token,
    };
    const res = await dispatch(getUserProfile(data)).unwrap();
    if (res.status == "Success") {
      setData(res.data);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <UserContent title="Profile">
      <div _ngcontent-aja-c61="" className="col-xl-4">
        <div _ngcontent-aja-c61="" className="card">
          <div
            _ngcontent-aja-c61=""
            className="card-body profile-card pt-4 d-flex flex-column align-items-center"
          >
            <img
              _ngcontent-aja-c61=""
              src="assets/images/profile_image.png"
              alt="Profile"
              className="rounded-circle"
            />
            <h2 _ngcontent-aja-c61="">{data?.name}</h2>
          </div>
        </div>
      </div>

      <div _ngcontent-aja-c61="" className="col-xl-8">
        <div _ngcontent-aja-c61="" className="card">
          <div _ngcontent-aja-c61="" className="card-body">
            <div className="tab-container tab-content" id="nav-tabContent">
              <ul
                role="tablist"
                className="nav nav-tab nav-tabs-bordered"
                aria-label="Tabs"
                id="nav-tab"
              >
                <li
                  className={`nav-item ${
                    activeTab === "Overview" ? "active" : ""
                  }`}
                  role="presentation"
                >
                  <Link
                    href="#"
                    id="nav-overview-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-overview"
                    type="button"
                    role="tab"
                    aria-controls="nav-overview"
                    aria-selected={activeTab === "Overview"}
                    onClick={() => handleTabChange("Overview")}
                    className="nav-link"
                  >
                    Overview
                  </Link>
                </li>

                <li
                  className={`nav-item ${
                    activeTab === "Change Password" ? "active" : ""
                  }`}
                >
                  <Link
                    href="#"
                    onClick={() => handleTabChange("Change Password")}
                    role="tab"
                    className="nav-link"
                    aria-selected="false"
                  >
                    Change Password
                  </Link>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    activeTab === "Overview" ? "show active" : ""
                  }`}
                  id="nav-overview"
                  role="tabpanel"
                  aria-labelledby="nav-overview-tab"
                >
                  <div
                    _ngcontent-aja-c61=""
                    className="profile-overview ng-star-inserted"
                  >
                    <h5 _ngcontent-aja-c61="" className="card-title">
                      Welcome to reddybook,{" "}
                      <b _ngcontent-aja-c61="">{data?.mobileNumber}</b>
                    </h5>
                    <div _ngcontent-aja-c61="" className="row border-bottom">
                      <div
                        _ngcontent-aja-c61=""
                        className="col-lg-3 col-4 label"
                      >
                        User Id :
                      </div>
                      <div _ngcontent-aja-c61="" className="col-lg-9 col-8">
                        {data?.mobileNumber}
                      </div>
                    </div>
                    <div _ngcontent-aja-c61="" className="row border-bottom">
                      <div
                        _ngcontent-aja-c61=""
                        className="col-lg-3 col-4 label"
                      >
                        Available Chips :
                      </div>
                      <div _ngcontent-aja-c61="" className="col-lg-9 col-8">
                        0/-
                      </div>
                    </div>
                    <div _ngcontent-aja-c61="" className="row border-bottom">
                      <div
                        _ngcontent-aja-c61=""
                        className="col-lg-3 col-4 label"
                      >
                        exposure :
                      </div>
                      <div _ngcontent-aja-c61="" className="col-lg-9 col-8">
                        0.00/-
                      </div>
                    </div>
                    <div _ngcontent-aja-c61="" className="row border-bottom">
                      <div
                        _ngcontent-aja-c61=""
                        className="col-lg-3 col-4 label"
                      >
                        Total Chips :
                      </div>
                      <div _ngcontent-aja-c61="" className="col-lg-9 col-8">
                        0/-
                      </div>
                    </div>
                    <div _ngcontent-aja-c61="" className="row">
                      <div
                        _ngcontent-aja-c61=""
                        className="col-lg-3 col-4 label"
                      >
                        Profit/Loss :
                      </div>
                      <div _ngcontent-aja-c61="" className="col-lg-9 col-8">
                        <span _ngcontent-aja-c61="" className="green">
                          0.00/-
                        </span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div
                  className={`tab-pane fade ${
                    activeTab === "Change Password" ? "show active" : ""
                  }`}
                  id="nav-change-password"
                  role="tabpanel"
                  aria-labelledby="nav-change-password-tab"
                >
                  <UserChangePassword />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserContent>
  );
};

export default UserProfile;
