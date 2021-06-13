import React from "react";
import animateScrollTo from "animated-scroll-to";
import Button from "antd/es/button";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Container } from "./styles";

export default () => (
  <Container>
    <Button
      type="primary"
      onClick={() => animateScrollTo(document.querySelector("#headerBar"))}
      icon={<ArrowUpOutlined />}
    >
      Back to Top
    </Button>
  </Container>
);
