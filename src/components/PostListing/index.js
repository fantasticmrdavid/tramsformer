import React from "react";
import BarPattern from "components/BarPattern";
import PostSummary from "components/PostSummary";
import { LatestPost, TitleContainer } from "./styles";

export default ({ posts }) => {
  if (!posts) return null;
  return (
    <div className="blog-posts container">
      <TitleContainer>
        <BarPattern direction="left" height={40} />
        <LatestPost>Latest Post</LatestPost>
        <BarPattern direction="right" height={40} />
      </TitleContainer>
      {posts.map((post, i) => (
        <PostSummary post={post} isFirst={i === 0} key={post.node.id} />
      ))}
    </div>
  );
};
