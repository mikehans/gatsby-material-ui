module.exports = {
  siteMetadata: {
    title: `Mike Hansford`,
    siteUrl: `https://mikehansford.id.au`,
    description: `Mike Hansford's software development blog.`,
    author: `Mike Hansford`,
    subtitle: `Web development, Microsoft 365, Power Platform`,
    linkedIn: `https://linkedin.com/in/mikehansford`,
    twitter: `https://twitter.com/mikehansford10`,
    github: `https://github.com/mikehans`
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
