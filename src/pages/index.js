import { graphql } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import Layout from "components/Layout";

import Homepage from "./homepage";
import SeoImage from '../images/seo_image.jpg'
import React from 'react'

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

export const Head = ({ data }) => {
  const { prismicBloghome} = data
  const { headline, description } = prismicBloghome.data
  return (<>
    <meta charSet="utf-8" />
    <title>{headline.text}</title>
    <meta property="og:description" content={description.text} />
    <meta property="og:image" content={SeoImage} />
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
  </>)
}

Homepage.Layout = Layout;
export default withPrismicPreview(Homepage);
