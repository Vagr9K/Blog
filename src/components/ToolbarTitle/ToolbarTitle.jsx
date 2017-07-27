import React, { Component } from "react";
import Avatar from "react-md/lib/Avatars";
import config from "../../../data/SiteConfig";
import "./ToolbarTitle.scss";

export default class ToolbarTitle extends Component {
  render() {
    const { userAvatar } = config;
    return (
      <div className="toolbar-title">
        <Avatar src={userAvatar} role="presentation" />
        <h2 className="toolbar-title-text">
          {config.siteTitle}
        </h2>
      </div>
    );
  }
}
