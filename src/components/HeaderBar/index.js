import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import BackToTopButton from "components/BackToTopButton";
import {
  Container, Nav, NavItem, SubNavMenu,
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
        label: "Toys & Figures",
        href: "https://www.etsy.com/au/shop/MelbourneMechaWorks",
        isExternal: true,
      },
      {
        id: 5,
        label: "T-Shirts & Apparel",
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

  const isHome = typeof window !== "undefined" ? window.location.pathname === "/" : true;

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
            { !isHome && <NavItem to="/">{"> PROJECT TRAMSFORMATION"}</NavItem> }
          </div>
          <div>
            {
              navList.map((i) => (
                i.children ? (
                  <NavItem
                    key={`headerNav_${i.id}`}
                  >
                    {i.label}
                    <SubNavMenu>
                      {
                        i.children.map((c) => (
                          <NavItem
                            to={c.href}
                            key={`headerNav_${c.id}`}
                            target={c.isExternal ? "_blank" : undefined}
                          >
                            {c.label}
                          </NavItem>
                        ))
                      }
                    </SubNavMenu>
                  </NavItem>
                ) : (
                  <NavItem
                    to={i.href}
                    key={`headerNav_${i.id}`}
                    target={i.isExternal ? "_blank" : undefined}
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
