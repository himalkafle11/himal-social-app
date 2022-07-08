import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Portal } from "@mui/material";

export default function Post(props) {
  console.log(props);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={`../assets/${props.feedPost.postProfile}`}
            />
            <span className="postUserName">{props.feedPost.postUsername}</span>
            <span className="postDate">{props.feedPost.postTime}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="postTopIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{props.feedPost.postCaption}</span>
          <img
            className="postImg"
            src={`../assets/${props.feedPost.postImg}`}
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="postLike" src="../assets/like.png" />
            <img className="postLike" src="../assets/heart.png" />
            <span className="postLikeCount">
              {props.feedPost.postLikes} likes
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postComments">
              {props.feedPost.postComments} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
