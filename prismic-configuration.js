const apiKey = process.env.PRISMIC_API_KEY;
const prismicReleaseID = process.env.PRISMIC_RELEASE_ID;

module.exports = {
  // The repo name for your Prismic repository (found in the url of your repo: https://tramsformation.prismic.io/)
  prismicRepo: "tramsformation",

  // Release ID to build (requires access)
  releaseID: prismicReleaseID,

  // access token to access the release
  accessToken: apiKey,
};
