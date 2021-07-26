import styled, { css } from "styled-components";
import { Container as BarPattern } from "components/BarPattern/styles";
import { media } from "styles/utils";
import { fadeIn } from "styles/animations";

export const Background = styled.div`
  position: absolute;
  top: -2em;
  left: 0;
  width: 100%;
  height: 250px;
  overflow: hidden;

  svg {
    fill: rgba(0, 0, 0, 0.35);
    path {
      opacity: 0.1;
    }
  }
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: #FFF;
  background: linear-gradient(0deg, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 100%);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  
  h1 {
    text-shadow: -2px -2px 0 #FFF, 2px -2px 0 #FFF, -2px 2px 0 #FFF, 2px 2px 0 #FFF;
  }
  
  a {
    color: var(--headingColor);

    &:hover {
      text-decoration: underline;
    }
  }
  
  img {
    animation: ${css`${fadeIn} 1s ease 1`};
    animation-fill-mode: forwards;
  }
  
  .homepage-slice-wrapper {
    width: 100%;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  text-align: center;
  width: 100%;
  margin: 2em 0;
  text-transform: uppercase;
  overflow-x: hidden;
  
  > * {
    white-space: nowrap;
  }

  ${media.small`
    overflow-x: unset;
  `}
  
  & ${BarPattern} {
    
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

export const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--maxContentWidth);
  margin-bottom: 2em;
  padding: 0 1em;

  ${media.small`
    padding: 0;
  `}

  & *:last-child {
    text-align: right;
  }
`;
