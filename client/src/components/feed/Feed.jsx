import Post from "../post/Post";
import { useEffect, useState } from "react";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //to use async/await in useEffect,need to create a function inside it
    const fetchPosts = async () => {
      const res = await axios.get("/posts/timeline/62ce76ad6a6f23698fbbfc76");
      setPosts(res.data);
    };
    fetchPosts();
  }, [])  //to use this just once when Feed is rendered,dependency is just []

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
