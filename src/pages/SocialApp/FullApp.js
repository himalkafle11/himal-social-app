import React from "react";
import LogIn from "../../components/LogIn/LogIn";
import Home from "../Home/Home";
import Register from "../../components/Register/Register";
import { Routes, Route } from "react-router-dom";
import ProfileMain from "../../components/profile/ProfileMain";

function FullApp() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="home/profile" element={<ProfileMain />}></Route>
      <Route path="home/profile/register" element={<Register />}></Route>
    </Routes>
  );
}

export default FullApp;
