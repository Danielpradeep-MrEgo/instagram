import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteBorderTwoToneIcon from "@material-ui/icons/FavoriteBorderTwoTone";
import { Avatar } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { fab, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
        // src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
      />

      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>

      <div className="header__Icons">
        <HomeIcon />
        <FontAwesomeIcon
          style={{ display: "flex", paddingRight: "15px" }}
          icon={faFacebookMessenger}
          size="lg"
          color="black"
        />
        <FontAwesomeIcon
          icon={faCompass}
          size="lg"
          style={{ display: "flex", paddingRight: "15px" }}
        />
        <FavoriteBorderTwoToneIcon />
        <Link to="/profile">
          <Avatar style={{ height: "27px", width: "27px" }} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
