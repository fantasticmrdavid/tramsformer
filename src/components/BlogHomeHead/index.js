import React from "react";
import { RichText } from "prismic-reactjs";
import SubscribeFrom from "components/SubscribeForm";

const BlogHomeHead = ({ home }) => (
  <div className="home-header container" data-wio-id={home.id}>
    <h1>{RichText.asText(home.headline)}</h1>
    <p className="blog-description">{RichText.asText(home.description)}</p>
    <SubscribeFrom />
  </div>
);

export default BlogHomeHead;
