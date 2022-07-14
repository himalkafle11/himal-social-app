import React from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { profilePosts, friends } from "../../DummyData";
import ProfileFeed from "../profile/ProfileFeed";
import ProfileFriends from "./ProfileFriends";
import Topbar from "../../components/topbar/Topbar";

function Profile() {
  const profile = profilePosts.map((profilePost) => {
    return <ProfileFeed key={profilePost.id} post={profilePost} />;
  });
  const user = friends.map((person) => {
    return <ProfileFriends key={person.id} person={person} />;
  });
  const navigate = useNavigate();
  return (
    <>
      <Topbar />
      <div className="profileMainPage">
        <div className="profileSidebar">
          <Sidebar />
        </div>

        <div className="profileMain">
          <div className="profilePicCover"></div>
          <div className="profileFeedFriends">
            <div className="profileFeed">{profile}</div>
            <div className="friendsProfile">{user}</div>
          </div>
        </div>
        <h1></h1>
        {/* <button onClick={() => navigate("register")}>Register</button> */}
      </div>
    </>
  );
}

export default Profile;
