import SpaceXLaunchesChart from "../charts/SpaceXLaunchesChart";
import { Link, useParams } from "react-router-dom";
import { API } from "../utils/enums";
import BitcoinPriceChart from "../charts/BitcoinPriceChart";
import { Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faO } from "@fortawesome/free-solid-svg-icons";

const ChartVisualizer = () => {
  const { apiName } = useParams();
  switch (apiName) {
    case API.SpaceX:
      return <SpaceXLaunchesChart />;
    case API.CoinPrices:
      return <BitcoinPriceChart />;
    default:
      return (
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <br />
          <Grid display={"flex"} flexDirection={"row"}>
            <FontAwesomeIcon icon={faClock} />
            <FontAwesomeIcon icon={faO} />
            <FontAwesomeIcon icon={faClock} />
          </Grid>
          <Typography variant={"h1"}>404</Typography>

          <Typography variant={"caption"}>
            Sorry, no graphs available for this API. Click{" "}
            <Link to={"/"}>here</Link> to navigate to safety!
          </Typography>
        </Grid>
      );
  }
};

export default ChartVisualizer;
