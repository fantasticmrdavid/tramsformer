import styled, { css } from "styled-components";
import { transparentize } from "polished";
import theme from "styles/theme";
import { Cursor } from "components/Blinker/styles";

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
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background-color: rgba(0, 0, 0, 0.05);
  transition: 0.3s;
`;

export const Container = styled.div`
  position: relative;
  margin-bottom: 1em;
  padding: 1em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.025);
  transition: 0.3s;
  opacity: 0.8;
  
  ${(props) => props.isFirst && css`
      background-color: rgba(43, 250, 10, 0.1);
      border: ${`1px solid ${transparentize(0.7, theme.colorPostHeadingFirst)}`};
    
      & ${Meta},
      & ${BracketLeft},
      & ${BracketRight},
      & ${BracketLeft}::after,
      & ${BracketRight}::after {
        border-color: ${transparentize(0.7, theme.colorPostHeadingFirst)};
        color: ${theme.colorPostHeadingFirst};
      }

      & ${Cursor} {
        border-bottom-color: ${theme.colorPostHeadingFirst};
      }
    
      &:hover {
        h2 {
          color: ${theme.colorPostHeading} !important;
        }

        & ${Cursor} {
          border-bottom-color: ${theme.colorPostHeading};
        }
      }
  `}

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
      color: ${theme.colorPostHeading};
    }
  }
  
  &:first-of-type {
    h2 {
      font-size: 1.75rem;
      color: ${theme.colorPostHeadingFirst};
    }
  }

  h2 {
    margin: 0;
    font-size: 1.3rem;
    color: ${theme.colorPostHeading};
    text-align: left;
    font-weight: 400;
    transition: 0.3s;
    
    a {
      text-decoration: none;
    }
  }
  
  p {
    margin-bottom: 1em;
  }
}
`;
