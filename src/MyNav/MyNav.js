import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),

  '@media all': {
    minHeight: 35,
  },
}));

export default function MyNav() {
  return (
    <Box sx={{ flexGrow: 1 ,mb:8}}>
      <AppBar position="static" style={{ background: 'white' }}>
        <StyledToolbar>
        <Button variant="text">SUBSCRIBE</Button>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
            style={{color:"black"}}
          >
           Blog
          </Typography>
          <IconButton size="large" aria-label="search" style={{ color: '#646566' }}>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined">SIGN UP</Button>
        </StyledToolbar>
       
      </AppBar>
    </Box>
  );
}