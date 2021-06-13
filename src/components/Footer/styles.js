import styled from "styled-components";
import { Container as BarPattern } from "components/BarPattern/styles";
import { Link } from "gatsby";

export const Container = styled.div`
  position: relative;
`;

export const FooterBar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: black;
  padding: 1em;
  margin-top: 1em;
  z-index: 2;
  color: white;
  font-size: 0.8rem;
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  width: 700px;
  
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
  
  &:hover {
    color: #d87800;
  }
`;

export const ImageContainer = styled.div`
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
