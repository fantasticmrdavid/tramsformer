import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Date, RichText } from "prismic-reactjs";
import BarPattern from "components/BarPattern";
import Layout from "components/Layout";
import { ImageCaption, Quote, Text } from "../slices";
import { Container, DateContainer, Nav } from "./styles";

// Sort and display the different slice options
const PostSlices = ({ slices }) => slices.map((slice, index) => {
  const res = (() => {
    switch (slice.slice_type) {
      case "text":
        return (
          <div key={index} className="homepage-slice-wrapper">
            <Text slice={slice} />
          </div>
        );

      case "quote":
        return (
          <div key={index} className="homepage-slice-wrapper">
            <Quote slice={slice} />
          </div>
        );

      case "image_with_caption":
        return (
          <div key={index} className="homepage-slice-wrapper">
            <ImageCaption slice={slice} />
          </div>
        );

      default:
    }
  })();
  return res;
});

// Display the title, date, and content of the Post
const PostBody = (props) => {
  const {
    blogPost,
    site,
    nextPost,
    prevPost,
  } = props;

  let postDate = Date(blogPost.date);
  postDate = postDate
    ? new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(postDate)
    : "";

  const postTitle = RichText.asText(blogPost.title.raw).length !== 0
    ? RichText.asText(blogPost.title.raw) : "Untitled";
  const prevTitle = prevPost ? RichText.asText(prevPost.node.data.title.raw) : undefined;
  const nextTitle = nextPost ? RichText.asText(nextPost.node.data.title.raw) : undefined;

  return (
    <Container>
      <Helmet>
        <title>{`${postTitle} | ${site.siteMetadata.title}`}</title>
      </Helmet>
      <div className="container post-header">
        <h1>{`> ${postTitle}`}</h1>
        <DateContainer className="date">
          <BarPattern direction="left" height={30} count={7} />
          <time>{postDate}</time>
          <BarPattern direction="right" height={30} count={7} />
        </DateContainer>
      </div>
      {/* Go through the slices of the post and render the appropiate one */}
      <PostSlices slices={blogPost.body} />
      <Nav>
        {
          prevPost
            ? <Link to={prevPost.node.url}>{`< ${prevTitle}`}</Link>
            : <div />
        }
        {
          nextPost
            ? <Link to={nextPost.node.url}>{`${nextTitle} >`}</Link>
            : <div />
      }
      </Nav>
    </Container>
  );
};

export const Post = (props) => {
  const { data } = props;
  if (!data) return null;

  // Define the Post content returned from Prismic
  const { allPrismicPost, prismicPost, site } = data;
  const post = prismicPost.data;
  const postIndex = allPrismicPost.edges.findIndex((p) => p.node.uid === prismicPost.uid);

  return (
    <Layout>
      <PostBody
        blogPost={post}
        site={site}
        nextPost={postIndex > 0 ? allPrismicPost.edges[postIndex - 1] : undefined}
        prevPost={
          postIndex < allPrismicPost.edges.length
            ? allPrismicPost.edges[postIndex + 1]
            : undefined
        }
      />
    </Layout>
  );
};

export default Post;
