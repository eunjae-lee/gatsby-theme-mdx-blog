module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${process.cwd()}/src/pages`, // load pages from working directory (blog)
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`, // load pages from this package (theme)
      },
    },
  ],
};
