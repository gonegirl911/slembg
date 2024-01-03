import { GatsbyConfig } from "gatsby";

export default {
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
        icon: "assets/svg/logo.svg",
        icons: [
          {
            src: "assets/images/logo.png",
            sizes: "196x196",
          },
          {
            src: "assets/images/maskable_logo.png",
            sizes: "196x196",
            purpose: "maskable",
          },
          {
            src: "assets/images/splash_logo.png",
            sizes: "512x512",
          },
        ],
        theme_color_in_head: false,
      },
    },
    "gatsby-plugin-offline",
  ],
} satisfies GatsbyConfig;
