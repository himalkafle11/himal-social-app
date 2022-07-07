import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">HimalSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchBarIcon" />
          <input
            placeholder="search for friends, posts and many more"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/person/1.jpeg"
          alt="profilePicture"
          className="topbar-img"
        />
      </div>
    </div>
  );
}
