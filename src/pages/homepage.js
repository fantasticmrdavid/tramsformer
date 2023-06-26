import React from "react";
import Layout from "components/Layout";
import PostListing from "components/PostListing";
import BlogHomeHead from "components/BlogHomeHead";

const Homepage = ({ data }) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  if (!data) return null;
  // Define the Blog Home & Blog Post content returned from Prismic
  const home = data.prismicBloghome.data;
  const posts = data.allPrismicPost.edges;

  return (
    <Layout>
      <BlogHomeHead home={home} />
      <PostListing posts={posts} />
    </Layout>
  );
};

export default Homepage;
