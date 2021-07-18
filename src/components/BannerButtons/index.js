import React from "react";
import shopTfwImage from "../../images/bannerButton_shop_tfw.png";
import shopMerchImage from "../../images/bannerButton_shop_merch.png";
import {
  Container,
  BannerButton,
  BracketContainer,
  BracketLeft,
  BracketRight,
  Title,
  TitleLarge,
} from "./styles";

const itemList = [
  {
    id: 1,
    title: (
      <Title>
        {"> "}
        Buy the
        <TitleLarge>TRAMSFORMER</TitleLarge>
      </Title>
    ),
    backgroundColorOff: "rgba(50, 185, 187, 0.75)",
    backgroundColorOn: "rgba(50, 185, 187, 1)",
    backgroundImage: shopTfwImage,
    href: "https://www.etsy.com/au/shop/MelbourneMechaWorks",
    isExternal: true,
  },
  {
    id: 2,
    title: (
      <Title>
        {"> "}
        Shop
        <TitleLarge>Apparel & Merch</TitleLarge>
      </Title>
    ),
    backgroundColorOff: "rgba(230, 93, 93, 0.75)",
    backgroundColorOn: "rgba(230, 93, 93, 1)",
    backgroundImage: shopMerchImage,
    href: "https://www.redbubble.com/people/misterdavid/shop?artistUserName=misterdavid&collections=206830&iaCode=all-departments&sortOrder=relevant",
    isExternal: true,
  },
];

export default () => (
  <Container>
    {
      itemList.map((i) => (
        <a
          key={`bannerButtons_${i.id}`}
          href={i.href}
          target={i.isExternal ? "_blank" : undefined}
          rel="noopener noreferrer"
        >
          <BannerButton
            backgroundColorOff={i.backgroundColorOff}
            backgroundColorOn={i.backgroundColorOn}
            backgroundImage={i.backgroundImage}
          >
            <BracketContainer>
              <BracketLeft />
              <BracketRight />
            </BracketContainer>
            {i.title}
          </BannerButton>
        </a>
      ))
    }
  </Container>
);
