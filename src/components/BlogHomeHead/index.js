import React from 'react'
import { RichText } from 'prismic-reactjs'

const BlogHomeHead = ({ home }) => {
  return (
    <div className="home-header container" data-wio-id={home.id}>
      <h1>{RichText.asText(home.headline)}</h1>
      <p className="blog-description">{RichText.asText(home.description)}</p>
    </div>
  )
}

export default BlogHomeHead;
