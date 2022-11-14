import React, { useEffect, useState } from "react";
import CountryTable from "../components/CountryTable";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCountries, search } from "../redux/reducers/countries";

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Home = () => {
  //const [input, setInput] = useState("");
  const state = useAppSelector((state) => state.countriesReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <Box sx={{bgcolor:'background.default'}}>
      <input
        type="text"
        //value={input}
        onChange={(e: any) => {
          //setInput()
          dispatch(search(e.target.value))
        }}
        name="search"
        id="search"
      />
            <IconButton sx={{ ml: 1 }}  color="inherit">
        {true ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <Box>
        <CountryTable countries={ state.filtered.length ? state.filtered : state.countries} />
      </Box>
    </Box>
  );
};

export default Home;
