module.exports = {
  siteMetadata: {
    title: 'Adam Młynarczyk Portfolio',
    description: 'This page is about my frontend passion and my skills',
    author: '@mlynek600',
    // siteUrl: '',
    keywords: ['Frontend developer'],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-ts-config',
    {
      resolve: 'gatsby-plugin-styled-components',
    },
  ],
}
