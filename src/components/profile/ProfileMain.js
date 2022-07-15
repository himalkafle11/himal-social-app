import React from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { profilePosts, friends } from "../../DummyData";
import ProfileFeed from "../profile/ProfileFeed";
import ProfileFriends from "./ProfileFriends";

import Share from "../share/Share";
import PorfileTopbar from "./ProfileTopbar";

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
      <PorfileTopbar />
      <div className="profilePage">
        <div className="profileSidebar">
          <Sidebar />
        </div>

        <div className="profileCoverPostFriends">
          <div className="profilePicCover">
            <img className="profileCover" src="../../assets/person/9.jpg" />
            <img className="profilePhoto" src="../../assets/person/11.webp" />

            <div className="profileText">
              <h1 className="profileName">Himal Kafle</h1>
              <h4 className="profileBio">Hello my friends !!!</h4>
            </div>
          </div>
          <div className="profileMain">
            <div className="profileFeedFriends">
              <div className="shareFeed">
                <div>
                  <Share />
                </div>
                <div className="profileFeed">{profile}</div>
              </div>
            </div>
            <div className="friendsProfile">{user}</div>
          </div>

          {/* <button onClick={() => navigate("register")}>Register</button> */}
        </div>
      </div>
    </>
  );
}

export default Profile;
