import React, { useEffect } from 'react'
import {useParams} from 'react-router'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchCountry } from '../redux/reducers/countries';

const SingleCountryPage = () => {

    const {params} = useParams()
    const country = useAppSelector((state) => state.countriesReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (params) { dispatch(fetchCountry(params));}
   
  }, []);

    return (
        <div>
            <div>
          {country[0].capital}</div>
          <div><img src={country[0].flags[0]} alt="" width="50em" /></div>
          
          </div>
      
          
    )
  
}

export default SingleCountryPage