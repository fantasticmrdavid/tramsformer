import React from "react";
import {
  Container,
  Edition,
  Indicator,
} from "./styles";

export default () => (
  <Container>
    <Indicator />
    Project Status:
    <Edition>
      In Production - 2021 Edition - 11/35 Units Remaining
    </Edition>
  </Container>
);
