import "./rightbar.css";

import React from "react";

function RightbarOnlineFriends(props) {
  return (
    <>
      <li className="rightbarFriend">
        <div className="rightbarProfileContainer">
          <img
            className="rightbarProfileImg"
            src={`../assets/${props.person.profilePic}`}
            alt="friendProfile"
          />
          <span className="rightbarProfileStatus"></span>
        </div>
        <span className="rightbarUsername">{props.person.userName}</span>
      </li>
    </>
  );
}

export default RightbarOnlineFriends;
