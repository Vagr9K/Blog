import React, { Component } from 'react';
import Avatar from 'react-md/lib/Avatars';
import Link from 'gatsby-link';
import config from '../../../data/SiteConfig';
import './ToolbarTitle.scss';

export default class ToolbarTitle extends Component {
  render() {
    const { userAvatar } = config;
    return (
      <Link to="/" className="toolbar-title">
        <Avatar src={userAvatar} role="presentation" className="toolbar-avatar" />
        <h2 className="toolbar-title-text">
          {config.siteTitle}
        </h2>
      </Link>
    );
  }
}
