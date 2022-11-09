import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import SendIcon from "@mui/icons-material/Send";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption
          Icon={ModeCommentOutlinedIcon}
          title="Comment"
          color="gray"
        />
        <InputOption Icon={RepeatOutlinedIcon} title="Repost" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
