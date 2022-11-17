import React, { createContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { amber, deepOrange, grey, red, deepPurple } from "@mui/material/colors";
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
            primary: deepPurple,
            divider: deepPurple[700],
            background: {
              default: deepPurple[100],
              paper: deepPurple[100],
            },
            text: {
              primary: grey[900],
              secondary: grey[300],
            },
            action: {
              active: grey[900],
              hover: grey[900],
              hoverOpacity: 0.7,
              focus: grey[900],
              focusOpacity: 1,
              selected: grey[900],
              selectedOpacity: 1
            },
          }
        : {
            // palette values for dark mode
            primary: deepPurple,
            divider: deepPurple[700],
            background: {
              default: '#053C5E',
              paper: '#053C5E',
            },
            text: {
              primary: "#BFDBF7",
              secondary: "#BFDBF7",
            },
            action: {
              active: "#BFDBF7",
              hover: "#BFDBF7",
              hoverOpacity: 0.7,
              focus: "#BFDBF7",
              focusOpacity: 1,
              selected: "#BFDBF7",
              selectedOpacity: 1
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
