module.exports = {
  pathPrefix: '/diploma',
  siteMetadata: {
    title: 'Cuba Bar - Golohovaya 28',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'pp17w473qhjl',
        accessToken: 'c75731e78862f3356bf3245ecdefc5118711b4df9168b8a229d5c3ba028e66e9',
      },
    },
  ],
}
