import React from "react";
import "./modal.css";
import SettingsIcon from "@mui/icons-material/Settings";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import FeedbackIcon from "@mui/icons-material/Feedback";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function Modal(props) {
  const navigate = useNavigate();

  return (
    <div onMouseLeave={() => props.closeModal(false)} className="modal">
      <div className="outProfile">
        <img className="outProfileImg" src="../../assets/person/1.jpg" />
        <div className="outProfileName">Himal Kafle</div>
      </div>
      <div className="outLinks">
        <div className="outLink">
          <SettingsIcon />
          <span>Settings</span>
        </div>
        <div className="outLink">
          <PrivacyTipIcon />
          <span>Privacy Tips</span>
        </div>
        <div className="outLink">
          <FeedbackIcon />
          <span>Feedbacks</span>
        </div>
        <div className="outLink">
          <HelpIcon />
          <span>Need any Help?</span>
        </div>
        <div onClick={() => navigate("/")} className="outLink">
          <LogoutIcon />
          <span>LogOut</span>
        </div>
      </div>
    </div>
  );
}

export default Modal;
