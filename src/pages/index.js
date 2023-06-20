import { graphql } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import Layout from "components/Layout";

import Homepage from "./homepage";

// Query for the Blog Home content in Prismic
export const query = graphql`query MyQuery {
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
  allPrismicPost(sort: {data: {date: DESC}}) {
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
}`;

Homepage.Layout = Layout;
export default withPrismicPreview(Homepage);
