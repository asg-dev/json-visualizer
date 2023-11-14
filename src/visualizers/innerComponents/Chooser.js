import { Typography } from "@mui/material";
import APIChooserList from "./APIChooserList";
import { ContentBox } from "../APIChooser";

function Chooser({ selectedAPI }) {
  return (
    <>
      <Typography variant="h5">Choose a public API</Typography>
      <br />
      <ContentBox>
        <APIChooserList selectedAPI={selectedAPI} />
      </ContentBox>
    </>
  );
}

export default Chooser;
