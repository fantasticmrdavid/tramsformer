import styled from "styled-components";
import { Link } from "gatsby";

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

export const NavItem = styled(Link)`
  color: white;
  font-size: 14px;
  
  &:hover {
    color: var(--headingColor);
  }
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: var(--maxContentWidth);
  text-transform: uppercase;
  color: white;
  
  & > div:first-of-type {
    text-align: left;
    
    & ${NavItem} {
      margin-right: 2em;
    }
  }

  & > div:last-of-type {
    text-align: right;

    & ${NavItem} {
      margin-left: 2em;
    }
  }
`;
