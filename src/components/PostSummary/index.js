import React from "react";
import { Date, RichText } from "prismic-reactjs";
import { Link } from "gatsby";
import Blinker from "components/Blinker";
import BorderTracer from "components/BorderTracer";
import theme from "styles/theme";
import {
  Container, Meta, BracketLeft, BracketRight,
} from "./styles";

// Function to retrieve a small preview of the post's text
const firstParagraph = (post) => {
  // // Find the first text slice of post's body
  const firstTextSlice = post.body.find((slice) => slice.slice_type === "text");
  if (firstTextSlice != null) {
    // Set the character limit for the text we'll show in the homepage
    const textLimit = 300;
    const text = RichText.asText(firstTextSlice.primary.text.raw);
    const limitedText = text.substring(0, textLimit);

    if (text.length > textLimit) {
      // Cut only up to the last word and attach '...' for readability
      return (
        <p>{`${limitedText.substring(0, limitedText.lastIndexOf(" "))}...`}</p>
      );
    }
    // If it's shorter than the limit, just show it normally
    return <p>{text}</p>;
  }
  // If there are no slices of type 'text', return nothing
  return null;
};

const PostSummary = ({ post, id, isFirst }) => {
  // Store and format the blog post's publication date
  let postDate = Date(post.node.data.date);
  postDate = postDate
    ? new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(postDate)
    : "";

  // // Default title when post has no title set
  const defaultTitle = "Untitled";
  return (
    <Container key={id} isFirst={isFirst}>
      <Link to={post.node.url}>
        {
          isFirst && (
            <>
              <BracketLeft />
              <BracketRight />
              <BorderTracer cycleColor />
              <BorderTracer direction="left" cycleColor />
            </>
          )
        }
        <h2>
          {`> ${RichText.asText(post.node.data.title.raw).length !== 0
            ? RichText.asText(post.node.data.title.raw)
            : defaultTitle}`}
          {
            isFirst && <Blinker />
          }
        </h2>
        <Meta>
          <time>{postDate}</time>
        </Meta>
        {/* Renders a small preview of the post's text */}
        {firstParagraph(post.node.data)}
      </Link>
    </Container>
  );
};

export default PostSummary;
