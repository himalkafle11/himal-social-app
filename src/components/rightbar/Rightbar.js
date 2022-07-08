import "./rightbar.css";

export default function Rightbar() {
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
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                className="rightbarProfileImg"
                src="../assets/person/4.jpeg"
                alt="friendProfile"
              />
              <span className="rightbarProfileStatus"></span>
            </div>
            <span className="rightbarUsername">Laxman Kafle</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                className="rightbarProfileImg"
                src="../assets/person/4.jpeg"
                alt="friendProfile"
              />
              <span className="rightbarProfileStatus"></span>
            </div>
            <span className="rightbarUsername">Laxman Kafle</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                className="rightbarProfileImg"
                src="../assets/person/4.jpeg"
                alt="friendProfile"
              />
              <span className="rightbarProfileStatus"></span>
            </div>
            <span className="rightbarUsername">Laxman Kafle</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                className="rightbarProfileImg"
                src="../assets/person/4.jpeg"
                alt="friendProfile"
              />
              <span className="rightbarProfileStatus"></span>
            </div>
            <span className="rightbarUsername">Laxman Kafle</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                className="rightbarProfileImg"
                src="../assets/person/4.jpeg"
                alt="friendProfile"
              />
              <span className="rightbarProfileStatus"></span>
            </div>
            <span className="rightbarUsername">Laxman Kafle</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                className="rightbarProfileImg"
                src="../assets/person/4.jpeg"
                alt="friendProfile"
              />
              <span className="rightbarProfileStatus"></span>
            </div>
            <span className="rightbarUsername">Laxman Kafle</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
