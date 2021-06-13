import styled from "styled-components";
import { Container as BarPattern } from "components/BarPattern/styles";

export const Container = styled.div`
  a {
    color: var(--headingColor);
    background-repeat: repeat-x;
    background-size: 2px 2px;
    background-position: 0 23px;
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
  
  > * {
    white-space: nowrap;
  }
  
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
