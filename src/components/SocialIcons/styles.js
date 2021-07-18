import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.5rem;
  text-align: right;
  
  & > * {
    margin-right: 0.5em;
    
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
