module.exports = {
  head: {
    title: "Site Name",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "{{escape description }}",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              limit: 1000, // 1kB
              name: "img/[name].[contenthash:7].[ext]",
            },
            query: {
              limit: 1000, // 1kB
              name: "img/[name].[hash:7].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              limit: 1000, // 1kB
              name: "fonts/[name].[contenthash:7].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(webm|mp4|ogv)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "videos/[name].[contenthash:7].[ext]",
            },
          },
        ],
      },
    ],
  },
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: [
      "~assets/styles/base/fonts.scss",
      "~assets/styles/base/variables.scss",
      "~assets/styles/base/mixins.scss",
      "~assets/styles/base/icons.scss",
      "~assets/styles/base/animations.scss",
    ],
  },
};
