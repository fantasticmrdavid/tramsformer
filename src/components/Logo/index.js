import React from "react";
import { Container, Pretitle, Title } from "./styles";

export default ({ title = "TFW", pretitle = "Project Tramsformation" }) => (
  <Container>
    <Pretitle>{`> ${pretitle}`}</Pretitle>
    <Title>{ title }</Title>
  </Container>
);
