import React from "react";
import "./logIn.css";
import Home from "../../pages/Home/Home";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  return (
    <div className="logInPage">
      <div className="loginWelcomeText">
        <h1 className="welcomeTitle">HimalSocial</h1>
        <p className="welcomeText">
          Connect with friends and the world around you on HimalSocial.
        </p>
      </div>

      <div className="loginSide">
        <form className="loginForm">
          <input className="inputFormLogIn" type="email" placeholder="Email" />
          <input
            className="inputFormLogIn"
            type="password"
            placeholder="Password"
          />
          <button
            onClick={() => navigate("home")}
            className="buttonLogIn"
            type="submit"
          >
            Log In
          </button>
        </form>
        <div className="links">
          <a className="linkForgot" href="#">
            Forgot password?
          </a>
          <button
            onClick={() => navigate("/home/profile/register")}
            className="linkNew"
            // href="#"
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
