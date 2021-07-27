import React from "react";
import Logo from "components/Logo";
import SocialIcons from "components/SocialIcons";
import {
  ContentEndBackground,
  Container,
  FooterBar,
  LogoWrapper,
  Nav,
  NavItem,
  Note,
  RowRight,
  SocialIconsContainer,
  SplitRow,
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
      <SplitRow>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <RowRight>
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
          </Nav>
          <SocialIconsContainer>
            <SocialIcons />
          </SocialIconsContainer>
        </RowRight>
      </SplitRow>
      <Note>
        Project Tramsformation acknowledges the Traditional Custodians of the lands on which this
        website and project was created, is hosted, and is viewed. This website was created on the
        lands of the Boon Wurrung and Woiwurrung (Wurundjeri) peoples of the Kulin Nation. We pay
        respects to their Elders past, present, and emerging.
      </Note>
      <SplitRow>
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
        <Note>
          {`Copyright ${new Date().getFullYear()} Project Tramsformation`}
        </Note>
      </SplitRow>
    </FooterBar>
  </Container>
);
