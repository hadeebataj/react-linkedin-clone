import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItems">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
          alt=""
        />
        <Avatar src="./1582704721394.jpeg" className="sidebar__avatar " />
        <h2>Hadeeba Taj</h2>
        <h4>hadeebataj@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who's viewed your profile</p>
          <p className="sidebar__statNumber">80</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">180</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("frontenddeveloper")}
        {recentItem("uiuxdesign")}
        {recentItem("reactdeveloper")}
        {recentItem("nextjs")}
      </div>
    </div>
  );
}

export default Sidebar;
