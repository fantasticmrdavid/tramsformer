import React from "react";
import { RichText } from "prismic-reactjs";
import Logo from "components/Logo";
import SubscribeFrom from "components/SubscribeForm";
import {
  Container,
  Content,
  Background,
  Header,
} from "./styles";

const BlogHomeHead = ({ home }) => (
  <Container data-wio-id={home.id}>
    <Content>
      <Background />
      <Header>
        <Logo pretitle={RichText.asText(home.headline)} title="TFW" />
        <p className="blog-description">{RichText.asText(home.description)}</p>
        <SubscribeFrom />
      </Header>
    </Content>
  </Container>
);

export default BlogHomeHead;
