import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CountryTable from "../components/CountryTable";
import ToggleButton from "../components/ToggleButton";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCountries, search } from "../redux/reducers/countries";

const Home = () => {
  const state = useAppSelector((state) => state.countriesReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <input
        type="text"
        onChange={(e: any) => {
          dispatch(search(e.target.value));
        }}
        name="search"
        id="search"
      />

      <ToggleButton />
      <Box>
        <CountryTable
          countries={state.filtered.length ? state.filtered : state.countries}
        />
      </Box>
    </Box>
  );
};

export default Home;
