import React from 'react'
import { RichText } from 'prismic-reactjs'

const BlogHomeHead = ({ home }) => {
  const avatar = { backgroundImage: `url(${home.image.url})` }
  return (
    <div className="home-header container" data-wio-id={home.id}>
      <div className="blog-avatar" style={avatar} />
      <h1>{RichText.asText(home.headline)}</h1>
      <p className="blog-description">{RichText.asText(home.description)}</p>
    </div>
  )
}

export default BlogHomeHead;
