import React from "react";
import { Revealer, SweepLeft, SweepRight } from "./styles";

export default ({ children }) => (
  <Revealer>
    <SweepLeft />
    <SweepRight />
    {children}
  </Revealer>
);
