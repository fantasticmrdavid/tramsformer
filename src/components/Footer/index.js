import React from "react";
import SocialIcons from "components/SocialIcons";
import {
  ContentEndBackground,
  Container,
  FooterBar,
  Nav,
  NavItem,
  Note,
  SocialIconsContainer,
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
];

export default () => (
  <Container>
    <ContentEndBackground />
    <FooterBar>
      <Nav>
        <div>
          {
            navList.map((i) => (
              <NavItem
                key={`footer_nav_${i.href}`}
                to={i.href}
              >
                {i.label}
              </NavItem>
            ))
          }
        </div>
        <div>
          {`Copyright ${new Date().getFullYear()} Project Tramsformation`}
        </div>
      </Nav>
      <SocialIconsContainer>
        <SocialIcons />
      </SocialIconsContainer>
      <Note>
        Project Tramsformation acknowledges the Traditional Custodians of the lands on which this
        website and project was created, is hosted, and is viewed. This website was created on the
        lands of the Boon Wurrung and Woiwurrung (Wurundjeri) peoples of the Kulin Nation. We pay
        respects to their Elders past, present, and emerging.
      </Note>
      <Note>
        Website by
        {" "}
        <a
          href="https://fantasticmrdavid.com.au"
          target="_blank"
          rel="noreferrer"
        >
          fantasticmrdavid.com.au
        </a>
      </Note>
    </FooterBar>
  </Container>
);