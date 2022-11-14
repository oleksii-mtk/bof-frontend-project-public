import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CountryTable from "./components/CountryTable";
import Home from "./pages/Home";
import SingleCountryPage from "./pages/SingleCountryPage";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: red[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});

function App() {
  return (

    
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:countryname" element={<SingleCountryPage />} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
