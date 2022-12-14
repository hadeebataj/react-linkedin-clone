import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import InputOption from "./InputOption";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import Post from "./Post";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__firstContainer">
          <Avatar src={user.photoUrl}>{user.email[0]}</Avatar>
          <div className="feed__input">
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Start a post"
              />
              <button onClick={sendPost} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={PhotoOutlinedIcon} title="Photo" color="#378fe9" />
          <InputOption Icon={SmartDisplayIcon} title="Video" color="#5f9b41" />
          <InputOption Icon={CalendarMonthIcon} title="Event" color="#c37d16" />
          <InputOption
            Icon={ArticleOutlinedIcon}
            title="Write article"
            color="#e16745"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
