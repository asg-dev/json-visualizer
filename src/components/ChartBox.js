import { Box } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const ChartInnerBox = styled(Box)`
  width: 35%;
`;

function ChartBox({ children }) {
  return <ChartInnerBox> {children}</ChartInnerBox>;
}

export default ChartBox;
