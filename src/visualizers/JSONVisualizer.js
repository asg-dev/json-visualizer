import React, { useCallback, useContext, useEffect, useState } from "react";

import { Grid } from "@mui/material";
import { APIContext } from "../contexts/APIContext";
import APIChooser from "./APIChooser";
import { toast } from "react-toastify";
import { API_URLS, APIS_WITH_GRAPHS } from "../utils/constants";
import ApiClient from "../api/ApiClient";
import { buildUrl } from "../utils/helpers";
import JSONViewer from "./innerComponents/JSONViewer";

export function JSONVisualizer({ currentQueryResult }) {
  const {
    selectedAPI,
    filteringOptions,
    queriedAPI,
    setQueriedAPI,
    setCurrentQueryResult,
  } = useContext(APIContext);
  const [hasGraphs, setHasGraphs] = useState(false);

  const performQuery = useCallback(
    async (event) => {
      if (event.type === "click" || (event.shiftKey && event.key === "Enter")) {
        if (!selectedAPI) {
          toast.error("Please select an API to query.");
          return;
        }
        const url = API_URLS[selectedAPI];
        const { error, data: queryResult } = await ApiClient.get(
          buildUrl(url, filteringOptions),
        );
        if (error) {
          setQueriedAPI(null);
          toast.error(
            `Error querying for ${selectedAPI}. Please clear any incorrect filtering options and try again.`,
          );
          return;
        }
        toast.info(`Queried for ${selectedAPI} @ ${url}...`);
        setCurrentQueryResult(queryResult);
        setQueriedAPI(selectedAPI);
      }
    },
    [selectedAPI, setCurrentQueryResult, filteringOptions, setQueriedAPI],
  );

  useEffect(() => {
    setHasGraphs(APIS_WITH_GRAPHS.includes(queriedAPI));
  }, [queriedAPI, setHasGraphs]);

  return (
    <Grid container spacing={0} onKeyDown={performQuery}>
      <APIChooser performQuery={performQuery} hasGraphs={hasGraphs} />
      <JSONViewer currentQueryResult={currentQueryResult} />
    </Grid>
  );
}
