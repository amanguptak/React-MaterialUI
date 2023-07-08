/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const preventDefault = (event) => event.preventDefault();

export default function Links() {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 8,
        
        },
      }}
      onClick={preventDefault}
    >
     
      <Link href="#" color="inherit"  m={8} pt={88}>
        {'Technology'}
      </Link>
      <Link href="#" color="inherit" m={8} pt={80}>
        {'Desgin'}
      </Link>
      <Link href="#" color="inherit"m={8} pt={80}>
        {'Culture'}
      </Link>
      <Link href="#" color="inherit" m={8} pt={80}>
        {'Bussiness'}
      </Link>
      <Link href="#" color="inherit"m={8} pt={80}>
        {'Politics'}
      </Link>
      <Link href="#" color="inherit"m={8} pt={80}>
        {'Opinion'}
      </Link>
      <Link href="#" color="inherit"m={8} pt={80}>
        {'Science'}
      </Link>
      <Link href="#" color="inherit"m={8} pt={80}>
        {'Health'}
      </Link>
      <Link href="#" color="inherit"m={8} pt={80}>
        {'Style'}
      </Link>
      <Link href="#" color="inherit"m={8} pt={80}>
        {'Travel'}
      </Link>
    </Box>
  );
}
