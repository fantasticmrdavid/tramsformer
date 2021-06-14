import styled from "styled-components";
import { Container as BarPattern } from "components/BarPattern/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: var(--headingColor);

    &:hover {
      text-decoration: underline;
    }
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

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--maxContentWidth);
  margin-bottom: 2em;
`;
