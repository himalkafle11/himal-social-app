import React from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="registerPage">
      <div className="registerTextBox">
        <h1 className="registerTitle">HimalSocial</h1>
        <p className="registerText">
          Connect with friends and the world around you on HimalSocial.
        </p>
      </div>

      <div className="registerSide">
        <form className="registerForm">
          <input className="registerInput" type="text" placeholder="Username" />
          <input className="registerInput" type="email" placeholder="Email" />
          <input
            className="registerInput"
            type="password"
            placeholder="New Password"
          />
          <input
            className="registerInput"
            type="password"
            placeholder="Confirm Password"
          />
          <button className="registerButton" type="submit">
            Sign Up
          </button>
        </form>
        <div className="links">
          <a onClick={() => navigate("/")} className="linkNewRegister" href="#">
            Log Into Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
