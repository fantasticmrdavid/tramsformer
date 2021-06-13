import styled from "styled-components";
import { Container as BarPattern } from "components/BarPattern/styles";

export const LatestPost = styled.div`
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  text-align: center;
  width: 100%;
  margin-bottom: 1.5em;
  
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
