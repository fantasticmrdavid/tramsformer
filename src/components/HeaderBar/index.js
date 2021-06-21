import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import BackToTopButton from "components/BackToTopButton";
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
    href: "https://www.etsy.com/au/shop/MelbourneMechaWorks",
    isExternal: true,
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
                <NavItem
                  to={i.href}
                  key={`headerNav_${i.href}`}
                  target={i.isExternal ? "_blank" : undefined}
                >
                  {i.label}
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </VisibilitySensor>
      {state.isBackToTopVisible && <BackToTopButton />}
    </Container>
  );
};
