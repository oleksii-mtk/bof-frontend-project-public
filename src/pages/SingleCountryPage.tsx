import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import HomeButton from "../components/HomeButton";
import ToggleButton from "../components/ToggleButton";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCountry } from "../redux/reducers/countries";

const SingleCountryPage = () => {
  const { countryname } = useParams();
  const state = useAppSelector((state) => state.countriesReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (countryname) {
      dispatch(fetchCountry(countryname));
    }
  }, []);

  return (
    
    <Box sx={{ bgcolor: "background.default" }}>
      <HomeButton/>
      <ToggleButton />
      Single Page
      <div>{state.singleCountry[0].capital[0]}</div>
      <div>{state.singleCountry[0].name.official}</div>
      <div><img src={state.singleCountry[0].flags.png} alt="" /></div>
     
  {/*     <div>{state.singleCountry[0].capital[0]}</div>
      <div>{state.singleCountry[0].name.official}</div>
      <div>{Object.keys(state.singleCountry[0].currencies)}</div> */}
    </Box>
  );
};

export default SingleCountryPage;
