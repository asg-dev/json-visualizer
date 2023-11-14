import { Box } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const ChartOuterBox = styled(Box)`
  margin-top: 16px;
  margin-bottom: 16px;

  > * {
    margin-top: 16px;
    margin-bottom: 10px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function ChartContainer({ children }) {
  return <ChartOuterBox>{children}</ChartOuterBox>;
}

export default ChartContainer;
