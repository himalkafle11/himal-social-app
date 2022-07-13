import React, { useState } from "react";
import "./logIn.css";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const home = () => navigate("home");

  const register = () => navigate("/home/profile/register");

  return (
    <div className="logInPage">
      <div className="loginWelcomeText">
        <h1 className="welcomeTitle">HimalSocial</h1>
        <p className="welcomeText">
          Connect with friends and the world around you on HimalSocial.
        </p>
      </div>

      <div className="loginSide">
        <form action="" className="loginForm">
          <input
            className="inputFormLogIn"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            placeholder="Email"
          />
          <input
            className="inputFormLogIn"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
          <button
            onClick={() => {
              if (
                email === "himalkafle11@gmail.com" &&
                password === "password"
              ) {
                home();
                return;
              } else {
                alert("Please enter the valid email and password");
              }
            }}
            className="buttonLogIn"
            type="submit"
          >
            Log In
          </button>
        </form>
        <div className="links">
          <a className="linkForgot" href={"#"}>
            Forgot password?
          </a>
          <button onClick={register} className="linkNew">
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
