import { graphql } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import Post from "components/Post";

// Query for the Blog Post content in Prismic
export const query = graphql`query BlogPostQuery($uid: String) {
  site {
    siteMetadata {
      title
      description
    }
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
        }
      }
    }
  }
  prismicPost(uid: {eq: $uid}) {
    id
    uid
    lang
    type
    url
    data {
      date
      title {
        richText
      }
      body {
        ... on PrismicPostDataBodyText {
          slice_label
          slice_type
          primary {
            text {
              richText
            }
          }
        }
        ... on PrismicPostDataBodyQuote {
          slice_label
          slice_type
          primary {
            quote {
              richText
            }
          }
        }
        ... on PrismicPostDataBodyImageWithCaption {
          id
          slice_label
          slice_type
          primary {
            image {
              alt
              url
            }
            caption {
              richText
            }
          }
        }
      }
    }
  }
}`;
export default withPrismicPreview(Post);
