import styled from "styled-components";
import { Container as BarPattern } from "components/BarPattern/styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2em;
`;

export const Content = styled.div`
  max-width: var(--maxContentWidth);
  width: 100%;
  
  a {
    color: var(--headingColor);
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const PatternContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  text-align: center;
  width: 100%;
  margin: 1.5em 0;
  
  & ${BarPattern} {
    transform: skew(15deg, 0);
    flex-direction: row-reverse;

    & > * {
      margin-right: 15px;
    }
  }
`;

export const Header = styled.div`
  margin-bottom: 2em;
`;

export const TechStack = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1em;
  
  h3 {
    margin-bottom: 0.25em;
  }
`;
