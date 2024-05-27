import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Wraper from "../Pages/Users/Wraper/Wraper";
import Login from "../Pages/Auth/Auth";
import SignUpUser from "../Pages/Auth/SignUpUser";
import Otp from "../Pages/Auth/OtpProcess";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import NotFound from "../Pages/Auth/NotFound";
import Dashboard from "../Pages/Users/Layout/Pages/dashbaord"
// import Dashboard from "../Pages/Users/pages"




// Public Routes Component
const PublicRoutes = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route exact path="/home" element={<Wraper />} />
    {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/signup" element={<SignUpUser />} />
    <Route exact path="/verifyotp" element={<Otp />} />
    <Route exact path="/forgetpassword" element={<ForgotPassword />} />
  </Routes>
);

export default PublicRoutes;
