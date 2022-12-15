import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

const HomeButton = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/'; 
      navigate(path);
    }
  return (
<IconButton aria-label="delete" onClick={routeChange}>
  <HomeIcon />
</IconButton>
  )
}

export default HomeButton