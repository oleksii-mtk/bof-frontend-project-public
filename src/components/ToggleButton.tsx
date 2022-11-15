import React, { useContext } from "react";

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from "../App";

const ToggleButton = () => {
    const colorMode = useContext(ThemeContext)
  return (
    <IconButton sx={{ ml: 1 }} color="inherit" onClick={() => colorMode.toggleMode()} >
      {true ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ToggleButton;
