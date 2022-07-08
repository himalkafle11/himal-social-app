import "./rightbar.css";
import RightbarOnlineFriends from "./RightbarOnlineFriends";
import { users } from "../../DummyData";

export default function Rightbar() {
  const user = users.map((person) => {
    return <RightbarOnlineFriends key={person.id} person={person} />;
  });
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            src="../assets/gift.png"
            alt="birthday-gift"
            className="birthdayImg"
          />
          <span className="birthdayText">
            <strong>Himal Kafle</strong> and <strong>4 other friends</strong>{" "}
            have a birthday today. Wish them a happy birthday.
          </span>
        </div>
        <div className="rightbarAdContainer">
          <img className="rightbarAd" src="../assets/advert.jpg" alt="ad" />
        </div>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">{user}</ul>
      </div>
    </div>
  );
}
