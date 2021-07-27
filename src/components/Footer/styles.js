import styled from "styled-components";
import { Link } from "gatsby";
import CityscapeBackground from "images/melbourne_city_line.png";
import { media } from "styles/utils";

export const ContentEndBackground = styled.div`
  position: absolute;
  display: none;
  top: -260px;
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
    margin-top: 16.5em;
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
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1em;
`;

export const NavItem = styled(Link)`
  color: white;
  margin-left: 2em;
  text-transform: uppercase;
`;

export const Note = styled.div`
  width: 100%;
  max-width: var(--maxContentWidth);
  margin: 0.5em 0;
`;

export const LogoWrapper = styled.div`
  color: white;
  padding-top: 0.35em;
`;

export const SocialIconsContainer = styled.div`
  width: 100%;
  max-width: var(--maxContentWidth);
  text-align: right;
`;

export const SplitRow = styled.div`
  display: grid;
  width: var(--maxContentWidth);
  max-width: 100%;
  grid-template-columns: 1fr 1fr;
  text-align: left;
  
  & > *:last-child {
    text-align: right;
  }
`;

export const RowRight = styled.div`
  display: flex;
  flex-direction: column;
`;
