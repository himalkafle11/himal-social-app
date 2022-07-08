import React from "react";
import "./logIn.css";
import Home from "../../pages/Home/Home";

function LogIn() {
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
          <input className="inputForm" type="email" placeholder="Email" />
          <input className="inputForm" type="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
        <div className="links">
          <a className="linkForgot" href="#">
            Forgot password?
          </a>
          <a className="linkNew" href="#">
            Create New Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
