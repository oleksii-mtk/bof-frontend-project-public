import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCountries } from "../redux/reducers/countries";

const CountryTable = () => {
  const countries = useAppSelector((state) => state.countriesReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  return (
    <ul>
      {countries.map(item=>(
        <li key={item.name.official}>{item.name.official}</li>
      ))}
    </ul>

  )
}

export default CountryTable