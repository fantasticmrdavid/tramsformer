import React from 'react'
import Layout from '../components/layouts'
import BlogPosts from '../components/BlogPosts'
import BlogHomeHead from '../components/BlogHomeHead'

const Homepage = ({ data }) => {
  if (!data) return null
  // Define the Blog Home & Blog Post content returned from Prismic
  const home = data.prismicBloghome.data
  const posts = data.allPrismicPost.edges

  return (
    <Layout>
      <BlogHomeHead home={home} />
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default Homepage
