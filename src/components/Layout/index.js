import React from "react";
import { StaticQuery, graphql } from "gatsby";
import HeaderBar from "components/HeaderBar";
import Footer from "components/Footer";
import "../../stylesheets/main.scss";

export default (props) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => <Layout data={data} {...props} />}
  />
);

const Layout = ({ children }) => {
  return (
    <>
      <HeaderBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
