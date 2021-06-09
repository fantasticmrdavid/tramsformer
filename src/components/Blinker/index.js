import React, { memo } from "react";
import { Cursor } from "./styles";

const Blinker = memo(({ color }) => <Cursor color={color} />);

export default Blinker;
