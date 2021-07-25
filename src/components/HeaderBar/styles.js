import styled from "styled-components";
import { Link } from "gatsby";
import { media } from "../../styles/utils";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: black;
  padding: 0.5em;
  margin-bottom: 2em;
  z-index: 3;
`;

export const LeftMenu = styled.div`
  & > * {
    display: none;

    ${media.small`
    display: block;
  `}
  }
`;

export const SubNavMenu = styled.div`
  display: none;
  position: absolute;
  flex-direction: column;
  text-align: left;
  padding: 0.5em 0;
  width: 200px;
  top: 30px;
  right: 0px;
  background-color: black;
`;

export const NavItem = styled(Link)`
  position: relative;
  color: white;
  font-size: 14px;
  
  &:hover {
    color: var(--headingColor);
    
    & ${SubNavMenu} {
      display: flex;
      padding: 0 1em;
    }
  }
`;

export const NavItemExternal = styled.a`
  position: relative;
  color: white;
  font-size: 14px;
  padding: 0.5em 0;

  &:hover {
    color: var(--headingColor);

    & ${SubNavMenu} {
      display: flex;
      padding: 0 1em;
    }
  }
`;

export const NoLinkNavItem = styled.span`
  position: relative;
  color: white;
  font-size: 14px;
  padding: 0.5em 0;
  margin-left: 2em;
  
  &:hover {
    color: var(--headingColor);
    
    & ${SubNavMenu} {
      display: flex;
      padding: 0 1em;
    }
  }
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  max-width: var(--maxContentWidth);
  width: 100%;
  text-transform: uppercase;
  color: white;
  padding: 0 0.5em;

  ${media.small`
    padding: 0;
  `}
  
  & > div:first-of-type {
    text-align: left;
    
    & > ${NavItem} {
      margin-right: 2em;
    }
  }

  & > div:last-of-type {
    text-align: right;

    & > ${NavItem} {
      margin-left: 2em;
    }
  }
`;
