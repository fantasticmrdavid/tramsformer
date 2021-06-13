import React from "react";
import { Container, Nav, NavItem } from "./styles";

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
    <Nav>
      <div></div>
      <div>
        {
          navList.map((i) => <NavItem href={i.href}>{i.label}</NavItem>)
        }
      </div>
    </Nav>
  </Container>
);
