import styled, { css } from "styled-components";
import { transparentize } from "polished";
import theme from "styles/theme";
import { Cursor } from "components/Blinker/styles";
import { media } from "../../styles/utils";

export const BracketLeft = styled.div`
  position: absolute;
  top: -13px;
  left: -13px;
  width: 80px;
  height: 80px;
  border-top: 8px solid rgba(0, 0, 0, 0.1);
  border-left: 8px solid rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  
  &::after {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: 150px;
    height: 150px;
    border-top: 4px solid rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(0, 0, 0, 0.1);
    transition: 0.3s;
  }
`;

export const BracketRight = styled.div`
  position: absolute;
  bottom: -13px;
  right: -13px;
  width: 80px;
  height: 80px;
  border-bottom: 8px solid rgba(0, 0, 0, 0.1);
  border-right: 8px solid rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &::after {
    position: absolute;
    content: "";
    bottom: 0px;
    right: 0px;
    width: 150px;
    height: 150px;
    border-bottom: 4px solid rgba(0, 0, 0, 0.1);
    border-right: 4px solid rgba(0, 0, 0, 0.1);
    transition: 0.3s;
  }
`;

export const Meta = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 14px;
  color: #9A9A9A;
  padding: 0.5em 1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background-color: rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  text-align: center;
  width: 100%;


  ${media.small`
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    width: auto;
    text-align: right;
  `}
`;

export const RouteLine = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  left: 0;
  bottom: -18px;
  height: 17px;
  width: 100%;
  
  &:after {
    content: "";
    position: relative;
    width: 21px;
    height: 100%;
    background-color: rgba(0,0,0,0.05);
  }
`;

export const Circle = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: white;
  z-index: 1;
  width: 7px;
  height: 7px;
  left: 14px;
  top: 5px;
`;

export const Container = styled.div`
  position: relative;
  margin-bottom: 1em;
  padding: 1em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgb(250, 250, 250);
  transition: 0.3s;
  opacity: 0.8;
  
  &:last-of-type {
    ${RouteLine} {
      display: none;
    }
  }

  &:hover {
    opacity: 1;
    background-color: rgba(250, 173, 20, 0.2);
    border-color: rgba(250, 173, 20, 0.4);

    & ${Meta},
    & ${BracketLeft},
    & ${BracketRight},
    & ${BracketLeft}::after,
    & ${BracketRight}::after
    {
      border-color: rgba(250, 173, 20, 0.4);
    }

    & ${Meta} {
      background-color: rgba(250, 173, 20, 0.4);
      color: var(--headingColor);
    }
  }

  h2 {
    margin: 1.5em 0 0.5em;
    line-height: 1.5;
    font-size: 1.3rem;
    color: var(--headingColor);
    text-align: left;
    font-weight: 400;
    transition: 0.3s;

    ${media.small`
      margin: 0;
    `}
    
    a {
      text-decoration: none;
    }
  }
  
  p {
    margin-bottom: 1em;
  }
  
  ${(props) => props.isFirst && css`
      background-color: rgba(43, 250, 10, 0.1);
      border: ${`1px solid ${transparentize(0.7, theme.colorPostHeadingFirst)}`};
    
    & h2 {
      font-size: 1.5rem;
      color: var(--postHeadingFirstColor);
      
      ${media.small`
        font-size: 1.75rem;
      `}
    }
    
      & ${Meta},
      & ${BracketLeft},
      & ${BracketRight},
      & ${BracketLeft}::after,
      & ${BracketRight}::after {
        border-color: ${transparentize(0.7, theme.colorPostHeadingFirst)};
        color: var(--postHeadingFirstColor);
      }

      & ${Cursor} {
        border-bottom-color: var(--postHeadingFirstColor);
      }
    
      &:hover {
        h2 {
          color: var(--headingColor) !important;
        }

        & ${Cursor} {
          border-bottom-color: var(--headingColor);
        }
      }
  `}
}
`;
