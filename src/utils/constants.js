import { API } from './enums';

const API_URLS = Object.freeze({
  [API.SpaceX]: "https://api.spacexdata.com/v2/launches",
  [API.CatFacts]: "https://catfact.ninja/facts",
  [API.PublicAPIs]: "https://api.publicapis.org/entries",
  [API.RandomJokes]: "https://official-joke-api.appspot.com/random_joke",
  [API.CoinPrices]: "https://api.coindesk.com/v1/bpi/currentprice.json",
});

const APIS_WITH_GRAPHS = [API.SpaceX, API.CoinPrices];

const CHART_LABELS = Object.freeze({
  BITCOIN_PRICE: "Bitcoin Price Chart",
  SPACEX_NUMBER_OF_LAUNCHES: "Number of Launches",
  SPACEX_SUCCESS_RATE_PERCENT: "Success Rate (%)",
  SPACEX_MISSION_OUTCOMES: "Mission Outcomes",
  SPACEX_ROCKET_TYPES: "Rocket Types",
});

const COLORS = Object.freeze({
  OVERALL_THEME: "#2B303B", // dark blue - the json viewer background color
});

const MAX_FILTERING_OPTS = 5;

export { API_URLS, APIS_WITH_GRAPHS, CHART_LABELS, COLORS, MAX_FILTERING_OPTS };
