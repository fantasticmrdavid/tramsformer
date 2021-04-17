import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import Homepage from './homepage'

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
              raw
            }
            date
            body {
              ... on PrismicPostBodyText {
                id
                slice_label
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default withPreview(Homepage)
