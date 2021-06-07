import React from "react";
import Input from "antd/es/input";
import { Container } from "./styles";

export default () => (
  <Container>
    <Input type="text" name="name" placeholder="Name" />
    <Input type="email" name="email" placeholder="Email" />
  </Container>
);
