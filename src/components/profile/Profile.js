import React from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  return (
    <div className="proflePage">
      <h1>This is profile page</h1>
      <button onClick={() => navigate("register")}>Register</button>
    </div>
  );
}

export default Profile;
