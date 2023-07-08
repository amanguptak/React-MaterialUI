import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaControlCard() {
  const theme = useTheme();

  return (
   
    <Card sx={{ display: 'flex' }}style={{ margin:"50px"  ,height:"200px"}}>
     
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" style={{textAlign: 'left'}}>
           Featured Post
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div"style={{textAlign: 'left'}}>
           Nov 12
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1}} style={{textAlign: 'left'}} >
        <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
        <a href="#">continue reading</a>
       
        </Box>
      </Box> 
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image="https://media.istockphoto.com/photos/fuji-japan-in-spring-picture-id876560704?k=20&m=876560704&s=612x612&w=0&h=ESL0O5Msbqh0jEs382NM_gh-2lRAvmA4QEgWZDvYffQ="
        alt="Live from space album cover"
      />


<Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" style={{textAlign: 'left'}}>
           Post title
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" style={{textAlign: 'left'}}>
            Nov 11
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }} style={{textAlign: 'left'}}>
        This is a wider card with supporting text below as a natural lead-in to additional content.
          
        </Box>
        <a href="#">continue reading</a>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image="https://media.istockphoto.com/photos/fuji-japan-in-spring-picture-id876560704?k=20&m=876560704&s=612x612&w=0&h=ESL0O5Msbqh0jEs382NM_gh-2lRAvmA4QEgWZDvYffQ="
        alt="Live from space album cover"
      />
    </Card>
   
   
  );
}
