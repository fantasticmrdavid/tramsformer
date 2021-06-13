import React from "react";
import Layout from "components/layouts";
import BlogHomeHead from "components/BlogHomeHead";
import { graphql } from "gatsby";

export const query = graphql`
  query AboutQuery {
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
  }
`;

const About = ({ data }) => {
  if (!data) return null;
  const home = data.prismicBloghome.data;

  return (
    <Layout>
      <BlogHomeHead home={home} />
      About page
    </Layout>
  );
};

export default About;
