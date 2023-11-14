import { createContext } from "react";

export const APIContext = createContext({
  selectedAPI: null,
  setSelectedAPI: (_) => {},
  filteringOptions: [],
  setFilteringOptions: (_) => {},
  queriedAPI: null,
  setQueriedAPI: (_) => {},
  currentQueryResult: null,
  setCurrentQueryResult: (_) => {},
});
