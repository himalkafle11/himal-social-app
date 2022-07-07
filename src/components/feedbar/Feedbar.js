import "./feedbar.css";
import Share from "../share/Share";
import Post from "../post/Post";

export default function Feedbar() {
  return (
    <div className="feedbar">
      <Share />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
