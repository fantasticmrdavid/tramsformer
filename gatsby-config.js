const {
  prismicRepo,
  releaseID,
  accessToken,
} = require("./prismic-configuration");
const linkResolver = require("./src/utils/linkResolver");

const reponame = process.env.PRISMIC_REPO_NAME || prismicRepo;
const apiKey = process.env.PRISMIC_API_KEY || accessToken;
const prismicReleaseID = process.env.PRISMIC_RELEASE_ID || releaseID;

const blogHomeSchema = require("./custom_types/bloghome.json");
const postSchema = require("./custom_types/post.json");

const gastbySourcePrismicConfig = {
  resolve: "gatsby-source-prismic",
  options: {
    repositoryName: reponame,
    accessToken: apiKey,
    releaseID: prismicReleaseID,
    prismicToolbar: true,
    linkResolver: () => (doc) => linkResolver(doc),
    schemas: {
      blogHome: blogHomeSchema,
      post: postSchema,
    },
  },
};

module.exports = {
  siteMetadata: {
    title: "Project Tramsformation",
    description: "The development blog for Project Tramsformation",
    author: "David Li",
    url: "https://tramsformation.com.au",
    image: "/images/seo_image.jpg",
  },
  plugins: [
    gastbySourcePrismicConfig,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    "gatsby-alias-imports",
    "gatsby-plugin-minify",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Project Tramsformation",
        short_name: "Tramsformation",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "roboto",
          "wallpoet",
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "UA-42927978-1",
        ],
      },
    },
  ],
};
