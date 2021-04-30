import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Post.css";
import MoreHorizIcons from "@material-ui/icons/MoreHoriz";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faComment,
  faCompass,
  faHeart,
  faPaperPlane,
  faSmile,
} from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
library.add(fab, faComment);

function Post() {
  const [input, setInput] = useState();

  return (
    <div className="post">
      <div className="post__topIcons">
        <div className="post__leftTopIcons">
          <Avatar />
          <h4>Danny</h4>
        </div>
        <MoreHorizIcons />
      </div>
      <div className="post__image">
        <img
          src="https://www.grammy.com/sites/com/files/styles/news_detail_header/public/marshmello_-1176410570.jpg?itok=55Dn-_aI"
          alt=""
        />
      </div>

      <div className="post__downmain">
        <div className="post__downleft">
          <FavoriteBorderOutlinedIcon />
          <FontAwesomeIcon
            icon={faComment}
            size="lg"
            style={{ display: "flex", paddingRight: "15px" }}
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            size="lg"
            style={{ display: "flex", paddingRight: "15px" }}
          />
        </div>
        <BookmarkBorderOutlinedIcon />
      </div>

      <div className="post__likes">
        <h4>500 likes</h4>
      </div>

      <div className="post__handler">
        <h4>Danny</h4>
      </div>

      <div className="post__input">
        <FontAwesomeIcon
          icon={faSmile}
          size="lg"
          style={{ display: "flex", paddingLeft: "15px" }}
        />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a comment"
        />
        <Button style={{textTransform:"capitalize", color: "blue"}}>Post</Button>
      </div>
    </div>
  );
}

export default Post;
