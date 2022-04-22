import React from "react";
import Logo from "components/Logo";
import BannerButtons from "components/BannerButtons";
import ProjectStatus from "components/ProjectStatus";
import SubscribeFrom from "components/SubscribeForm";
import Loadable from "@loadable/component";
import {
  Background,
  Container,
  Content,
  Header,
  HeroImage,
} from "./styles";

const BlogHomeHead = ({ home }) => {
  const Trianglify = Loadable(() => import("@planningcenter/react-trianglify"));
  return (
    <Container data-wio-id={home ? home.id : undefined}>
      <Background>
        <Trianglify
          width={2000}
          height={215}
          variance={1}
          strokeWidth={1}
          fill={false}
          xColors={["#000"]}
          yColors={["#000"]}
        />
      </Background>
      <Content>
        <HeroImage />
        <Header>
          <Logo pretitle={home.headline.text} title="TFW" />
          <p className="blog-description">{home.description.text}</p>
          <SubscribeFrom />
          <BannerButtons />
          <ProjectStatus />
        </Header>
      </Content>
    </Container>
  );
};

export default BlogHomeHead;
