import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GlobalCSS } from "./components/styles/GlobalCSS";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalCSS />
    <App />
  </ThemeProvider>
);
