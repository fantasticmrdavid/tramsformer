import styled, { css } from "styled-components";
import { Container as BarPattern } from "components/BarPattern/styles";
import { media } from "styles/utils";
import { fadeIn } from "styles/animations";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  
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
