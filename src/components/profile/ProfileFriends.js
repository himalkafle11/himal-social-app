import "./profileFriend.css";

import React from "react";

function ProfileFriends(props) {
  return (
    <div className="showFriends">
      <img
        className="profileProfileImg"
        src={`../assets/${props.person.profilePic}`}
        alt="friendProfile"
      />
      {/* <div className="profileUsername">{props.person.userName}</div> */}
    </div>
  );
}

export default ProfileFriends;
