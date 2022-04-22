/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "gatsby";
// import { Link as PrismicLink } from 'prismic-reactjs'
import linkResolver from "../utils/linkResolver";

const GatsbyLink = (type, element, content, children, index) => {
  const { data } = element;
  if (data.link_type === "Document") {
    return (
      <Link to={linkResolver(data)} key={data.id}>
        {content}
      </Link>
    );
  }
  return null;
};

export default GatsbyLink;
