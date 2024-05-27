import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileGetApi } from "../../../Redux/Slice/Admin/admin.slice";

const MainProfile = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const { getProfile } = useSelector((state) => state.AdminSlice);

  const getProfileData = async () => {
    const res = await dispatch(profileGetApi(token)).unwrap();
  };

  useEffect(() => {
    getProfileData();
  }, []);
  return (
    <>
      <div className="col-12  col-md-6 d-flex justify-content-center align-items-center">
        <div className="card mb-30">
          <div className="card-body p-5">
            <div class="profile-circle  ">
              <h1 className="profile-circle-text">
                {getProfile &&
                  getProfile?.data?.name?.toString().charAt(0).toUpperCase()}
              </h1>
            </div>
 <div className="card-body text-center">
              <h6 className="font-20 mt-2 mb-1">
                {getProfile && getProfile?.data?.name
                  ? getProfile?.data?.name
                  : "_"}
              </h6>
              <h6 className="font-14 mt-2">example@.com</h6>
              <h6 className="font-14 mb-0">
                {getProfile && getProfile?.data?.mobileNumber
                  ? getProfile?.data?.mobileNumber
                  : "-"}
              </h6>
              <div className="hire"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProfile;
