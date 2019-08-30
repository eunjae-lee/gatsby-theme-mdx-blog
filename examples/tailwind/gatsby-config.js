module.exports = {
  siteMetadata: {
    title: `tailwind example`,
    author: `Eunjae Lee`,
    description: `A tailwind blog theme`,
  },
  plugins: [
    `gatsby-theme-mdx-blog`,
    `gatsby-theme-mdx-tailwind-blog`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
