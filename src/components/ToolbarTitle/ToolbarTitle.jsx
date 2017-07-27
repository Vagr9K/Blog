import React, { Component } from "react";
import Link from "gatsby-link";
import config from "../../../data/SiteConfig";
import "./ToolbarTitle.scss";

export default class ToolbarTitle extends Component {
  render() {
    return (
      <Link to="/" className="toolbar-title">
        <img
          src="/logos/logo-64.png"
          alt="Website Logo"
          className="toolbar-avatar"
        />
        <h2 className="toolbar-title-text">
          {config.siteTitle}
        </h2>
      </Link>
    );
  }
}
