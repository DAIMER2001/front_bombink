const pkg = require("./package");

module.exports = {
  target: "static",

  router: {
    base: "/Vuemmerce/"
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.description,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      { "http-equiv": "x-ua-compatible", content: "ie=edge" },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
      { name: "theme-color", content: "#ffffff" },

      // Facebook open graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://example.com/page.html" },
      { property: "og:title", content: "Content Title" },
      { property: "og:image", content: "https://example.com/image.jpg" },
      { property: "og:description", content: "Description Here" },
      { property: "og:site_name", content: "Site Name" },
      { property: "og:locale", content: "en_US" },

      // Twitter card
      { property: "twitter:card", content: "summary" },
      { property: "twitter:site", content: "@site_account" },
      { property: "twitter:creator", content: "@individual_account" },
      { property: "twitter:url", content: "https://example.com/page.html" },
      { property: "twitter:title", content: "Content Title" },
      {
        property: "twitter:description",
        content: "Content description less than 200 characters"
      },
      { property: "twitter:image", content: "https://example.com/image.jpg" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-icon-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/apple-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      },
      {
        rel: "stylesheet",
        integrity:"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
        crossorigin: "anonymous",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        integrity:
          "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",
        crossorigin: "anonymous",
        href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      }
    ],

    script: [
      {
        crossorigin: "anonymous",
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["bulma"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ["@nuxtjs/axios"]
    // Doc: https://axios.nuxtjs.org/usage
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    proxy:true,
  },

  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:8000/',
      pathRewrite: { '^/api/': '/api/' }
    }
  },
  generate: {
    dir: "docs"
  },
  // serverMiddleware: ['~/middleware/cors.js']
};
