import React, { memo } from "react";
import { Tracer } from "./styles";

export default memo(
  ({ direction, cycleColor }) => <Tracer direction={direction} cycleColor={cycleColor} />,
);
