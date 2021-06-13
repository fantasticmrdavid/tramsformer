import React from "react";
import { Container, Bar } from "./styles";

export default ({ direction, height, count }) => {
  const arr = new Array(count || 7);
  return (
    <Container direction={direction} height={height}>
      {arr.fill(1).map((a, index) => <Bar key={`bar_${Math.random().toString(36).substring(7)}${index}`} fullsize={index > 5} />)}
    </Container>
  );
};
