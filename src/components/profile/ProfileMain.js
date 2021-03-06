import React from "react";
import "./profile.css";

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
  return (
    <>
      <PorfileTopbar />
      <div className="profilePage">
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
            <div className="friendsProfile">
              <div className="profileIntro">
                <p className="introName">Name:Himal Kafle</p>
                <p className="introCountry">Country:Nepal</p>
                <p className="introCity">City:Kathmandu</p>
                <p className="introStatus">Realtionship:Single</p>
              </div>
              <div className="profileFriendsTexts">
                <div className="profileFriendsText">All My Friends</div>
                <div className="profileFriendsText">Mutual Friends</div>
              </div>
              <div className="profileFriendsList">{user}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
