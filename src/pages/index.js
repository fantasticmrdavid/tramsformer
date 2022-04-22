import { graphql } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import "antd/dist/antd.css";
import Homepage from "./homepage";

// Query for the Blog Home content in Prismic
export const query = graphql`
  query MyQuery {
    prismicBloghome {
      data {
        description {
          text
        }
        headline {
          text
        }
      }
      id
      type
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
              richText
            }
            date
            body {
              ... on PrismicPostDataBodyText {
                id
                slice_label
                slice_type
                primary {
                  text {
                    richText
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default withPrismicPreview(Homepage);
