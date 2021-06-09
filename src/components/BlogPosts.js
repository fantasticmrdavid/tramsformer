import React from "react";
import PostSummary from "components/PostSummary";

export default ({ posts }) => {
  if (!posts) return null;
  return (
    <div className="blog-posts container">
      {posts.map((post, i) => (
        <PostSummary post={post} isFirst={i === 0} key={post.node.id} />
      ))}
    </div>
  );
};
