import { List } from "@mui/material";
import APIChooserListItem from "../../components/APIChooserListItem";
import { API } from "../../utils/enums";
import {
  faCat,
  faCoins,
  faFaceLaughBeam,
  faRocket,
  faUsersRays,
} from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

const ChooserList = styled(List)`
  width: 100%;
  background-color: #e0e0e0;
`;

const APIChooserList = ({ selectedAPI }) => {
  return (
    <ChooserList>
      <APIChooserListItem
        selected={selectedAPI === API.SpaceX}
        itemAPI={API.SpaceX}
        primaryText={"SpaceX Launches API"}
        secondaryText={"... get data about SpaceX launches (with graphs)."}
        icon={faRocket}
      />
      <APIChooserListItem
        selected={selectedAPI === API.CatFacts}
        itemAPI={API.CatFacts}
        primaryText={"Cat Facts API"}
        secondaryText={"... get random cat facts."}
        icon={faCat}
      />
      <APIChooserListItem
        selected={selectedAPI === API.PublicAPIs}
        itemAPI={API.PublicAPIs}
        primaryText={"Public API List"}
        secondaryText={"... view a list of public apis."}
        icon={faUsersRays}
      />
      <APIChooserListItem
        selected={selectedAPI === API.RandomJokes}
        itemAPI={API.RandomJokes}
        primaryText={"Random Jokes API"}
        secondaryText={"... get random jokes."}
        icon={faFaceLaughBeam}
      />
      <APIChooserListItem
        selected={selectedAPI === API.CoinPrices}
        itemAPI={API.CoinPrices}
        primaryText={"Coin Prices API"}
        secondaryText={"... get current coin prices (with graph)."}
        icon={faCoins}
      />
    </ChooserList>
  );
};

export default APIChooserList;
