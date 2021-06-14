import React from "react";
import Layout from "components/layouts";
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
