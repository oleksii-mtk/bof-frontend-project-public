import React, { useEffect } from 'react'
import CountryTable from '../components/CountryTable'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchCountries } from '../redux/reducers/countries';

const Home = () => {
  const countries = useAppSelector((state) => state.countriesReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  
  return (
    <div><CountryTable countries={countries}/></div>
  )
}

export default Home