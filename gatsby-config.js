module.exports = {
  siteMetadata: {
    title: `Cuba Bar - Golohovaya 28`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'pp17w473qhjl',
        accessToken: 'f48298775421dff693fb6baf54cb7683632fbdf6bbac0f9704ea4a3c8e405db3',
      },
    },
  ],
}
