import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';

const HomeButton = () => {
  return (
<IconButton aria-label="delete" onClick={"/"}>
  <HomeIcon />
</IconButton>
  )
}

export default HomeButton