import React from "react";
import BarPattern from "components/BarPattern";
import endOfBlogImg from "images/end_of_line_ticket.png";
import {
  Container,
  FooterBar,
  ImageContainer,
  Nav,
  NavItem,
} from "./styles";

const navList = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Shop",
    href: "/shop",
  },
];

export default () => (
  <Container>
    <ImageContainer>
      <BarPattern direction={"left"} height={100} />
      <img src={endOfBlogImg} alt={"End of blog"} />
      <BarPattern direction={"right"} height={100} />
    </ImageContainer>
    <FooterBar>
      <Nav>
        <div>
          {
            navList.map((i) => <NavItem href={i.href}>{i.label}</NavItem>)
          }
        </div>
        <div>{`Copyright ${new Date().getFullYear()} Project Tramsformation`}</div>
      </Nav>
    </FooterBar>
  </Container>
);
