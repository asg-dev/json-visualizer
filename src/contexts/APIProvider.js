import React, { useState } from 'react';

import { APIContext } from './APIContext';

export const APIProvider = ({
  currentQueryResult,
  setCurrentQueryResult,
  children,
}) => {
  const [selectedAPI, setSelectedAPI] = useState(null);
  const [queriedAPI, setQueriedAPI] = useState(null);
  const [filteringOptions, setFilteringOptions] = useState([]);

  const contextOptions = {
    selectedAPI,
    setSelectedAPI,
    queriedAPI,
    setQueriedAPI,
    currentQueryResult,
    setCurrentQueryResult,
    filteringOptions,
    setFilteringOptions,
  };

  return (
    <APIContext.Provider value={contextOptions}>{children}</APIContext.Provider>
  );
};
