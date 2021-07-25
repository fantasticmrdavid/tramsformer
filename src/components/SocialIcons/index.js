import React from "react";
import { GithubOutlined, InstagramOutlined, RedditOutlined } from "@ant-design/icons";
import { Container } from "./styles";

const socialLinkList = [
  {
    title: "Insta: @misterdavidsan",
    href: "https://www.instagram.com/misterdavidsan",
    icon: <InstagramOutlined />,
  },
  {
    title: "Github: fantasticmrdavid",
    href: "https://github.com/fantasticmrdavid/tramsformer",
    icon: <GithubOutlined />,
  },
  {
    title: "Reddit: u/mr_deelee",
    href: "https://www.reddit.com/user/mr_deelee",
    icon: <RedditOutlined />,
  },
];

export default () => (
  <Container>
    {
      socialLinkList.map((i, index) => (
        <a key={`socialIcon_${index.toString()}`} title={i.title} href={i.href} target="_blank" rel="noopener noreferrer">
          {i.icon}
        </a>
      ))
    }
  </Container>
);
