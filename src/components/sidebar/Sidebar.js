import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import SchoolIcon from "@mui/icons-material/School";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemtext">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemtext">Chats</span>
          </li>
          <li className="sidebarListItem">
            <OndemandVideoIcon className="sidebarIcon" />
            <span className="sidebarListItemtext">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListItemtext">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon" />
            <span className="sidebarListItemtext">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemtext">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemtext">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <InsertInvitationIcon className="sidebarIcon" />
            <span className="sidebarListItemtext">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemtext">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="../assets/person/2.jpeg"
              alt="friend-img"
            />
            <span>Himal Kafle</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="../assets/person/2.jpeg"
              alt="friend-img"
            />
            <span>Himal Kafle</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="../assets/person/2.jpeg"
              alt="friend-img"
            />
            <span>Himal Kafle</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="../assets/person/2.jpeg"
              alt="friend-img"
            />
            <span>Himal Kafle</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="../assets/person/2.jpeg"
              alt="friend-img"
            />
            <span>Himal Kafle</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="../assets/person/2.jpeg"
              alt="friend-img"
            />
            <span>Himal Kafle</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="../assets/person/2.jpeg"
              alt="friend-img"
            />
            <span>Himal Kafle</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="../assets/person/2.jpeg"
              alt="friend-img"
            />
            <span>Himal Kafle</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="../assets/person/2.jpeg"
              alt="friend-img"
            />
            <span>Himal Kafle</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
