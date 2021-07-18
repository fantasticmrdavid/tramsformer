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
      In Production - 2021 Edition - 18/35 Units Remaining
    </Edition>
  </Container>
);
