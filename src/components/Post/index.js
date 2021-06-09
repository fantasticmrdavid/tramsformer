import React from "react";
import { Link } from "gatsby";
import { Date, RichText } from "prismic-reactjs";
import Layout from "../layouts";
import { ImageCaption, Quote, Text } from "../slices";
import { Container } from "./styles";

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
const PostBody = ({ blogPost }) => {
  let postDate = Date(blogPost.date);
  postDate = postDate
    ? new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(postDate)
    : "";
  return (
    <Container>
      <div className="container post-header">
        <div className="back">
          <Link to="/">back to list</Link>
        </div>
        <h1>
          {RichText.asText(blogPost.title.raw).length !== 0
            ? RichText.asText(blogPost.title.raw)
            : "Untitled"}
        </h1>
        <p className="date">
          <time>{postDate}</time>
        </p>
      </div>
      {/* Go through the slices of the post and render the appropiate one */}
      <PostSlices slices={blogPost.body} />
    </Container>
  );
};

export const Post = ({ data }) => {
  if (!data) return null;
  // Define the Post content returned from Prismic
  const post = data.prismicPost.data;

  return (
    <Layout>
      <PostBody blogPost={post} />
    </Layout>
  );
};

export default Post;
