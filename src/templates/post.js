import { graphql } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import Post from "components/Post";
import React from 'react'

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

export const Head = ({ data }) => {
  const { site } = data
  const postTitle = data.prismicPost.data.title.richText[0].text
  return <title>{`${postTitle} | ${site.siteMetadata.title}`}</title>
}
export default withPrismicPreview(Post);
