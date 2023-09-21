import React, { useEffect, useState } from 'react'
import Logo from "components/Logo";
import BannerButtons from "components/BannerButtons";
import SubscribeFrom from "components/SubscribeForm";
import Loadable from "@loadable/component";
import MastheadBackgroundFull from "images/masthead_tfw.png";
import MastheadBackgroundLow from "images/masthead_tfw_low.png";
import {
  Background,
  Container,
  Content,
  Header,
  HeroImage,
} from "./styles";

const BlogHomeHead = ({ home }) => {
  const [imgSrc, setImgSrc] = useState(MastheadBackgroundLow)
  useEffect(() => {
    const img = new Image();
    img.src = MastheadBackgroundFull;
    img.onload = () => {
      setImgSrc(MastheadBackgroundFull);
    };
  }, [])
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
        <HeroImage src={imgSrc} />
        <Header>
          <Logo pretitle={home.headline.text} title="TFW" />
          <p className="blog-description">{home.description.text}</p>
          <SubscribeFrom />
          <BannerButtons />
        </Header>
      </Content>
    </Container>
  );
};

export default BlogHomeHead;
