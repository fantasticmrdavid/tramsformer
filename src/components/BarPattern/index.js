import React from "react";
import { Container, Bar } from "./styles";

const arr = new Array(5);

export default ({ direction, height }) => (
  <Container direction={direction} height={height}>
    {arr.fill(1).map((a, index) => <Bar fullsize={index > 5} />)}
  </Container>
);
