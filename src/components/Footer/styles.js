import styled from "styled-components";
import { Link } from "gatsby";
import CityscapeBackground from "images/melbourne_city_line.png";
import { media } from "styles/utils";

export const ContentEndBackground = styled.div`
  position: absolute;
  display: none;
  top: -205px;
  width: 100%;
  height: 100%;
  background: url(${CityscapeBackground}) bottom center no-repeat;
  
  ${media.small`
    display: block;
  `}
`;

export const Container = styled.div`
  position: relative;
  margin-top: 0;

  ${media.small`
    margin-top: 13em;
  `}
  
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
  padding: 2em 1em;
  margin-top: 2em;
  z-index: 2;
  color: white;
  font-size: 0.8rem;
`;

export const Nav = styled.nav`
  width: var(--maxContentWidth);
  max-width: 100%;
  
  & > div:first-of-type {
    text-align: left;
    margin-bottom: 1em;
  }
  
  ${media.small`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    
    & > div:first-of-type {
      margin: 0;
    }
    
    & > div:last-of-type {
      text-align: right;
    }
  `};
`;

export const NavItem = styled(Link)`
  color: white;
  margin-right: 2em;
  text-transform: uppercase;
`;

export const Note = styled.div`
  width: 100%;
  max-width: var(--maxContentWidth);
  margin: 0.5em 0;
`;

export const SocialIconsContainer = styled.div`
  width: 100%;
  max-width: var(--maxContentWidth);
  text-align: right;
`;
