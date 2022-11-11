import React, { useEffect } from 'react'
import {useParams} from 'react-router'

const SingleCountry = () => {
    const params = useParams()

  return (
    <div>
        Single page {params.countryname}</div>
  )
}

export default SingleCountry