import styled from "styled-components";
import { Container as BarPattern } from "components/BarPattern/styles";
import { Link } from "gatsby";

export const Container = styled.div`
  position: relative;
  
  a:hover {
    color: var(--headingColor);
  }
`;

export const FooterBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: black;
  padding: 1em;
  margin-top: 2em;
  z-index: 2;
  color: white;
  font-size: 0.8rem;
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  width: var(--maxContentWidth);
  
  & > div:first-of-type {
    text-align: left;
  }

  & > div:last-of-type {
    text-align: right;
  }
`;

export const NavItem = styled(Link)`
  color: white;
  margin-right: 2em;
  text-transform: uppercase;
`;

export const ContentEndContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  text-align: center;
  width: 100%;
  overflow-x: hidden;
  
  & ${BarPattern} {
    bottom: 70px;
    
    &:first-of-type {
      left: 0px;
      transform: skew(15deg, 0);
      flex-direction: row-reverse;
      
      & > * {
        margin-right: 15px;
      }
    }

    &:last-of-type {
      right: 0px;
      transform: skew(-15deg, 0);
      text-align: left;

      & > * {
        margin-left: 15px;
      }
    }
  }
`;

export const ContentEnd = styled.div`
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Note = styled.div`
  width: 100%;
  max-width: var(--maxContentWidth);
  margin-top: 1em;
`;
