import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ChartVisualizer from "./visualizers/ChartVisualizer";
import { JSONVisualizer } from "./visualizers/JSONVisualizer";
import Navbar from "./components/Navbar";
import ThemeProvider from "./styles/ThemeProvider";
import { useState } from "react";
import { APIProvider } from "./contexts/APIProvider";

function App() {
  const [currentQueryResult, setCurrentQueryResult] = useState(null);

  return (
    <main>
      <ThemeProvider>
        <Navbar />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <APIProvider
                  currentQueryResult={currentQueryResult}
                  setCurrentQueryResult={setCurrentQueryResult}
                >
                  <JSONVisualizer currentQueryResult={currentQueryResult} />
                </APIProvider>
              }
            />
            <Route path="/charts/:apiName" element={<ChartVisualizer />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </main>
  );
}

export default App;
