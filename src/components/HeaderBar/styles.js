import styled from "styled-components";
import { Link } from "gatsby";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: black;
  padding: 0.5em;
  margin-bottom: 2em;
  z-index: 2;
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  width: 700px;
  
  & > div:first-of-type {
    text-align: left;
  }

  & > div:last-of-type {
    text-align: right;
  }
`;

export const NavItem = styled(Link)`
  color: white;
  font-size: 14px;
  margin-left: 2em;
  
  &:hover {
    color: #d87800;
  }
`;
