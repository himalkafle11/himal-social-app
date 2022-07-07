import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="../assets/person/1.jpg" />
            <span className="postUserName">Himal Kafle</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="postTopIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey its my first post:)</span>
          <img className="postImg" src="../assets/person/1.jpg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="postLike" src="../assets/like.png" />
            <img className="postLike" src="../assets/heart.png" />
            <span className="postLikeCount">53 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postComments">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
