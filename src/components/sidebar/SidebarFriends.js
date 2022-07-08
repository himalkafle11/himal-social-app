import React from "react";
import "./sidebar.css";

function SidebarFriends(props) {
  return (
    <>
      <ul className="sidebarFriendList">
        <li className="sidebarFriend">
          <img
            className="sidebarFriendImg"
            src={`../assets/${props.person.profilePic}`}
            alt="friend-img"
          />
          <span>{props.person.userName}</span>
        </li>
      </ul>
    </>
  );
}

export default SidebarFriends;
