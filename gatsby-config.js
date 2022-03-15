/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `SLEM`,
    siteUrl: `https://www.slembg.eu`,
  },
  plugins: [
		'gatsby-plugin-postcss',
		{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'SLEM',
        short_name: 'SLEM',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/logo.png',
      },
    }
  ],
};
