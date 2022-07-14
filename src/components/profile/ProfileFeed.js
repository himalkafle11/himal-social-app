import "../post/post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export default function ProfileFeed({ post }) {
  const [like, setLike] = useState(post.postLikes);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src={`../assets/${post.postProfile}`}
                alt="profilePicture"
              />
              <span className="postUserName">{post.postUsername}</span>
              <span className="postDate">{post.postTime}</span>
            </div>
            <div className="postTopRight">
              <MoreVertIcon className="postTopIcon" />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.postCaption}</span>
            <img className="postImg" src={`../assets/${post.postImg}`} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                className="postLike"
                src="../assets/like.png"
                onClick={likeHandler}
                alt=""
              />
              <img
                className="postLike"
                src="../assets/heart.png"
                onClick={likeHandler}
                alt=""
              />
              <span className="postLikeCount">{like} likes</span>
            </div>
            <div className="postBottomRight">
              <span className="postComments">{post.postComments} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
