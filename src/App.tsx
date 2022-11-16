import React, { createContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { amber, deepOrange, grey, red } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CountryTable from "./components/CountryTable";
import Home from "./pages/Home";
import SingleCountryPage from "./pages/SingleCountryPage";

export const ThemeContext = createContext({ toggleMode: () => {} });

function App() {
  const [mode, setMode] = useState<"dark" | "light">("light");

  const manageTheme = {
    toggleMode: () => {
      setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
    },
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: deepOrange[900],
              paper: deepOrange[900],
            },
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          }),
    },
  });

  return (
    <ThemeContext.Provider value={manageTheme}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/country/:countryname"
              element={<SingleCountryPage />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
