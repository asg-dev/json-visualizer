import React from 'react';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/system';

// For now, just set the global font. We can add more customizations later.
const theme = createTheme({
  typography: {
    fontFamily: "Monaco, Menlo, Courier New",
  },
});

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
