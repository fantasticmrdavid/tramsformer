import React from "react";
import { RichText } from "prismic-reactjs";
import Logo from "components/Logo";
import SubscribeFrom from "components/SubscribeForm";

const BlogHomeHead = ({ home }) => (
  <div className="home-header container" data-wio-id={home.id}>
    <Logo pretitle={RichText.asText(home.headline)} title="TFW" />
    <p className="blog-description">{RichText.asText(home.description)}</p>
    <SubscribeFrom />
  </div>
);

export default BlogHomeHead;
