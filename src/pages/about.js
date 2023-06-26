import React from "react";
import Layout from "components/Layout";
import AboutContent from "components/AboutContent";
import { graphql } from "gatsby";

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;


export const Head = ({ data }) => {
  const { site } = data
  return <title>{`About | ${site.siteMetadata.title}`}</title>
}

const About = ({ data }) => {
  if (!data) return null;
  const { site: siteMetadata } = data;

  return (
    <Layout>
      <AboutContent siteMetadata={siteMetadata.siteMetadata} />
    </Layout>
  );
};

export default About;
