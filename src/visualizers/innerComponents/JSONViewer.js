import ReactJson from "react-json-view";
import React from "react";
import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

const StyledBox = styled(Box)`
  height: 100%;
  max-height: 100vh;
  overflow: auto;
`;

const SectionGrid = styled(Grid)`
  padding: 12px;
  background-color: #2b303b;
`;

function JSONViewer({ currentQueryResult }) {
  return (
    <SectionGrid item xs={6}>
      <StyledBox>
        {currentQueryResult && (
          <ReactJson
            src={currentQueryResult}
            theme="ocean"
            style={{ fontFamily: "Courier New" }}
          />
        )}
      </StyledBox>
    </SectionGrid>
  );
}

export default JSONViewer;
