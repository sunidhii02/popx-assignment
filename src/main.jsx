import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#642AF5',
    },
  },
});

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
);
