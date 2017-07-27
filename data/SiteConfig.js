module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Ruben's Blog", // Site title.
  siteTitleAlt: "Vagr9K's Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://vagr9k.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteDescription: "My personal blog where I write about life and technology.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "102660353705085", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-6", // Tracking code ID for google analytics.
  disqusShortname: "rubens-blog", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Ruben Harutyunyan", // Username to display in the author segment.
  userTwitter: "vagr9k", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "", // User location to display in the author segment.
  userAvatar: "/logos/avatar.png", // User avatar to display in the author segment.
  userDescription:
    "I'm an enthusiastic software developer from Armenia. Technology is my passion.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Vagr9K",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Vagr9K",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:harutyunyan.ruben@vagr9k.me",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "© 2017 Ruben Harutyunyan. CC BY-NC 4.0" // Copyright string for the footer of the website and RSS feed.
};
