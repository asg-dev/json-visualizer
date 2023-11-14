import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

function ChartHeader({ primaryHeader }) {
  return (
    <>
      <Typography variant={"h5"}>{primaryHeader}</Typography>
      <br />
      <Typography variant={"overline"}>
        (Click <Link to={"/"}>here</Link> to go home!)
      </Typography>
    </>
  );
}

export default ChartHeader;
