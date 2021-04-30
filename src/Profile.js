import { Avatar } from "@material-ui/core";
import React from "react";
import "./Profile.css";
import SettingsIcon from "@material-ui/icons/Settings";

function Profile() {
  return (
    <div className="profile">
      <Avatar />

      <div className="profile__rightMain">
        <div className="profile__rightTop">
          <h2>Danny</h2>
          <button>Edit Profile</button>
          <SettingsIcon />
        </div>

        <div className="profile__rightDown">
          <span>0 posts </span>
          <span>0 followers </span>
          <span>0 following </span>
        </div>

        <div className="profile__rightDesc">
          <h4>Mr.Ego</h4>
          <p>𝑨 𝑳𝒊𝒇𝒆'𝒔 𝑺𝒕𝒐𝒓𝒚</p>
          <p>Follow Me To Greatness😉</p>
          <p>Don’t like me? Don’t care🤷🏻‍♂️</p>
          <p>Black🖤</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
