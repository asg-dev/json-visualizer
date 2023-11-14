import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const ColoredCircularProgress = styled(CircularProgress)`
  color: #2b303b;
`;

const ProgressIndicatorBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ProgressIndicator = () => {
  return (
    <ProgressIndicatorBox>
      <ColoredCircularProgress />
    </ProgressIndicatorBox>
  );
};

export default ProgressIndicator;
