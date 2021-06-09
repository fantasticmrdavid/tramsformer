import React from "react";
import { Container, Pretitle, Title } from "./styles";

export default ({ title, pretitle }) => (
  <Container>
    <Pretitle>{`> ${pretitle}`}</Pretitle>
    <Title>{ title }</Title>
  </Container>
);
