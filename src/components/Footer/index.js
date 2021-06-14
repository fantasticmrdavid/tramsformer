import React from "react";
import { Link } from "gatsby";
import BarPattern from "components/BarPattern";
import {
  Container,
  FooterBar,
  ContentEnd,
  ContentEndContainer,
  Nav,
  NavItem,
  Note,
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
    <ContentEndContainer>
      <BarPattern direction="left" height={60} />
      <ContentEnd>End of the Line</ContentEnd>
      <BarPattern direction="right" height={60} />
    </ContentEndContainer>
    <FooterBar>
      <Nav>
        <div>
          {
            navList.map((i) => <NavItem href={i.href}>{i.label}</NavItem>)
          }
        </div>
        <div>{`Copyright ${new Date().getFullYear()} Project Tramsformation`}</div>
      </Nav>
      <Note>
        Project Tramsformation acknowledges the Traditional Custodians of the lands on which this
        website and project was created, is hosted, and is viewed. This website was created on the
        lands of the Boon Wurrung and Woiwurrung (Wurundjeri) peoples of the Kulin Nation. We pay
        respects to their Elders past, present, and emerging.
      </Note>
      <Note>
        Website by
        {" "}
        <Link href="https://fantasticmrdavid.com.au" target="_blank">fantasticmrdavid.com.au</Link>
      </Note>
    </FooterBar>
  </Container>
);
