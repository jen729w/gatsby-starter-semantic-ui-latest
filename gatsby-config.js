module.exports = {
  siteMetadata: {
    title: 'Gatsby Semantic UI Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
  ],
};
