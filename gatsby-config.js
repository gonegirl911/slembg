/** @type {import("gatsby").GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: "SLEM",
    siteUrl: "https://www.slembg.eu",
  },
  plugins: [
		"gatsby-plugin-postcss",
		"gatsby-plugin-image",
    "gatsby-plugin-sharp",
		"gatsby-plugin-fontawesome-css",
		{
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "SLEM",
        short_name: "SLEM",
        start_url: "/",
        background_color: "#f3f4f6",
        theme_color: "#f3f4f6",
        display: "standalone",
        icon: "src/assets/svg/logo.svg",
				theme_color_in_head: false,
      },
    },
  ],
	trailingSlash: "always",
};
