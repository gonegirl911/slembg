/** @type {import("gatsby").GatsbyConfig} */
module.exports = {
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
        icons: [
          {
            src: "src/assets/images/logo.png",
            sizes: `196x196`,
          },
          {
            src: "src/assets/images/maskable_logo.png",
            sizes: `196x196`,
            purpose: "maskable",
          },
          {
            src: "src/assets/images/splash_logo.png",
            sizes: `512x512`,
          },
        ],
        theme_color_in_head: false,
      },
    },
    "gatsby-plugin-offline",
  ],
  trailingSlash: "always",
};
