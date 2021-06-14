import { graphql } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import Post from "components/Post";

// Query for the Blog Post content in Prismic
export const query = graphql`
  query BlogPostQuery($uid: String) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allPrismicPost(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          url
          id
          uid
          type
          data {
            title {
              raw
            }
          }
        }
      }
    }
    prismicPost(uid: { eq: $uid }) {
      id
      uid
      lang
      type
      url
      data {
        date
        title {
          raw
        }
        body {
          ... on PrismicPostBodyText {
            slice_label
            slice_type
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_label
            slice_type
            primary {
              quote {
                raw
              }
            }
          }
          ... on PrismicPostBodyImageWithCaption {
            id
            slice_label
            slice_type
            primary {
              image {
                alt
                url
              }
              caption {
                raw
              }
            }
          }
        }
      }
    }
  }
`;

export default withPreview(Post);
