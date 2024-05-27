import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SuperAdmin from "./Superadmin";
import Admin from "./Admin";
import Users from "./User";
import Wraper from "../Pages/Users/Wraper/Wraper";
import Login from "../Pages/Auth/Auth";
import SignUpUser from "../Pages/Auth/SignUpUser";
import Otp from "../Pages/Auth/OtpProcess";
import ForgotPassword from "../Pages/Auth/ForgotPassword";

// Protected Routes Component
const ProtectedRoutes = ({ roles }) => (
  <Routes>
    <Route
      path="/super/*"
      element={roles === 0 ? <SuperAdmin /> : <Wraper />}
    />
    {/* <Route path="/admin/*" element={roles === 1 ? <Admin /> : <Wraper />} /> */}
    <Route path="/*" element={roles === 2 ? <Users /> : <Wraper />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
export default ProtectedRoutes;
