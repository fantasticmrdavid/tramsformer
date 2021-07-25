import styled, { css } from "styled-components";
import { Container as BarPattern } from "components/BarPattern/styles";
import { fadeIn } from "styles/animations";
import { media } from "styles/utils";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 1em 2em;

  ${media.small`
    padding: 0 0 2em 0;
  `}
`;

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
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

export const EmailAddress = styled.span`
  font-weight: 700;
  margin-left: 0.5em;
`;

export const ImageContainer = styled.div`
  text-align: center;
  padding-bottom: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    animation: ${css`${fadeIn} 1s ease 1`};
    animation-fill-mode: forwards;
    
    ${media.small`
      width: auto;
    `}
  }
`;

export const PatternContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  text-align: center;
  width: 100%;
  margin: 1.5em 0;
  overflow: hidden;

  ${media.small`
    overflow: visible;
  `}
  
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
