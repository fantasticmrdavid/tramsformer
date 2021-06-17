import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import HeaderBar from "components/HeaderBar";
import Footer from "components/Footer";
import SeoImage from "../../images/seo_image.jpg";
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
    // eslint-disable-next-line react/jsx-props-no-spreading
    render={(data) => <Layout data={data} {...props} />}
  />
);

const Layout = ({ data, children }) => {
  // Define the meta title and description
  const { title, description } = data.site.siteMetadata;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta property="og:description" content={description} />
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
      </Helmet>
      <HeaderBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
