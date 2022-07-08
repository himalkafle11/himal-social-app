import "./feedbar.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../DummyData";

export default function Feedbar() {
  const feedPosts = Posts.map((feedPost) => {
    return <Post key={feedPost.id} feedPost={feedPost} />;
  });
  return (
    <div className="feedbar">
      <div className="feedWrapper">
        <Share />
        {feedPosts}
      </div>
    </div>
  );
}
