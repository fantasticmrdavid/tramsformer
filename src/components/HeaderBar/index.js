import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import BackToTopButton from "components/BackToTopButton";
import {
  Container,
  NavItemExternal,
  Nav,
  NavItem,
  NoLinkNavItem,
  SubNavMenu,
} from "./styles";

const navList = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About",
    href: "/about",
  },
  {
    id: 3,
    label: "Shop",
    children: [
      {
        id: 4,
        label: "Buy the Tramsformer",
        href: "https://www.etsy.com/au/shop/MelbourneMechaWorks",
        isExternal: true,
      },
      {
        id: 5,
        label: "Apparel & Merch",
        href: "https://www.redbubble.com/people/misterdavid/shop?artistUserName=misterdavid&collections=206830&iaCode=all-departments&sortOrder=relevant",
        isExternal: true,
      },
    ],
  },
];

export default () => {
  const [state, setState] = useState({
    isBackToTopVisible: false,
  });

  return (
    <Container id="headerBar">
      <VisibilitySensor
        onChange={
          (isVisible) => setState({
            ...state,
            isBackToTopVisible: !isVisible,
          })
        }
      >
        <Nav>
          <div>
            {
              navList.map((i) => (
                i.children ? (
                  <NoLinkNavItem
                    key={`headerNav_${i.id}`}
                  >
                    {i.label}
                    <SubNavMenu>
                      {
                        i.children.map((c) => (
                          c.isExternal ? (
                            <NavItemExternal
                              href={c.href}
                              key={`headerNav_${c.id}`}
                              target={c.isExternal ? "_blank" : undefined}
                              rel="noopener noreferrer"
                            >
                              {c.label}
                            </NavItemExternal>
                          ) : (
                            <NavItem
                              href={c.href}
                              key={`headerNav_${c.id}`}
                              target={c.isExternal ? "_blank" : undefined}
                              rel="noopener noreferrer"
                            >
                              {c.label}
                            </NavItem>
                          )
                        ))
                      }
                    </SubNavMenu>
                  </NoLinkNavItem>
                ) : (
                  <NavItem
                    to={i.href}
                    key={`headerNav_${i.id}`}
                    target={i.isExternal ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {i.label}
                  </NavItem>
                )
              ))
            }
          </div>
        </Nav>
      </VisibilitySensor>
      {state.isBackToTopVisible && <BackToTopButton />}
    </Container>
  );
};
