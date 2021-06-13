import styled from "styled-components";
import theme from "styles/theme";

export const Container = styled.div`
  display: flex;
  height: ${(props) => props.height}px;
  justify-content: ${(props) => (props.direction === "left" ? "flex-end" : "flex-start")};
  align-items: center;
`;

export const Bar = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 30px;
  height: ${(props) => (props.fullsize ? 100 : 50)}%;
`;
