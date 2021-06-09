import styled from "styled-components";
import theme from "styles/theme";

export const Container = styled.div`
  position: relative;
  margin-bottom: 1em;
  padding: 1em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.025);
  transition: 0.3s;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
    background-color: rgba(250, 173, 20, 0.2);
  }
  
  &:first-of-type {
    h2 {
      font-size: 1.75rem;      
    }
  }

  h2 {
    margin: 0;
    font-size: 1.3rem;
    color: ${theme.colorPostHeading};
    text-align: left;
    font-weight: 400;
    
    a {
      text-decoration: none;
    }
  }

  .blog-post-meta {
    margin-bottom: 8px;
    font-size: 14px;
    color: #9A9A9A;
  }
`;
