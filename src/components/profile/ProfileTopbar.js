import "./profileTopbar.css";
import { Search } from "@mui/icons-material";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import { useNavigate } from "react-router-dom";

export default function PorfileTopbar() {
  const navigate = useNavigate();
  return (
    <div className="profileTopbarContainer">
      <div className="profileTopbarLeft">
        <span className="logo">HimalSocial</span>
      </div>
      <div className="profileTopbarCenter">
        <div className="searchBar">
          <Search className="searchBarIcon" />
          <input
            placeholder="search for friends, posts and many more"
            className="searchInput"
          />
        </div>
      </div>
      <div className="profileTopbarRight">
        <div className="profileTopbarLinks">
          <span onClick={() => navigate("/home")} className="profileTopbarLink">
            Homepage
          </span>
          <span className="profileTopbarLink">Timeline</span>
          <span className="profileTopbarLink">My Friends</span>
        </div>

        <div className="profileExits">
          <HorizontalSplitIcon />
        </div>
      </div>
    </div>
  );
}
