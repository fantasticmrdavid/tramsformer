import React from "react";
import { RichText } from "prismic-reactjs";
import Logo from "components/Logo";
import BannerButtons from "components/BannerButtons";
import SubscribeFrom from "components/SubscribeForm";
import {
  Container,
  Content,
  Background,
  Header,
} from "./styles";

const BlogHomeHead = ({ home }) => (
  <Container data-wio-id={home ? home.id : undefined}>
    <Content>
      <Background />
      <Header>
        <Logo pretitle={RichText.asText(home.headline)} title="TFW" />
        <p className="blog-description">{RichText.asText(home.description)}</p>
        <SubscribeFrom />
        <BannerButtons />
      </Header>
    </Content>
  </Container>
);

export default BlogHomeHead;
