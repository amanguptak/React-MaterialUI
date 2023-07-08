import * as React from 'react';
import './Agrid.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
 
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{marginLeft:"40px"}}>
        <Grid item xs={8}>
          <Item><h3 style={{textAlign: 'left', color:"black"}}>From the firehose</h3>
             <br />
             <h1 style={{textAlign: 'left', color:"black"}}>Sample blog post</h1>
             <h6 style={{textAlign: 'left', color:"grey"}}>April 1, 2020 by  <a href="#">Olivier</a> </h6>
         <div className="box">
          <p>
          This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, Images, and code are all supported. You can extend these by modifying Markdown.js.</p>



<p>
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
<p>
Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor

id nibh ultricies vehicula ut id elit.</p>

<p>
Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>


<p>
  <h3>Heading</h3>


Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
</p>

<h5>Sub-heading 1</h5>


Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

<h5>Sub-heading 2</h5>

<p>
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus. tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus</p>
<h1>New feature</h1>

<h5>March 14, 2020 by <a href=""> Tom</a></h5>

<p>
Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>


<ul>
<li> Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
<li> Donec id elit non mi porta gravida at eget metus.</li>
<li> Nulla vitae elit libero, a pharetra augue.</li>

</ul>



Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
<p>
Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue</p>


</div>
        
          </Item>
        </Grid>
        <Grid item xs={3} style={{marginLeft:"60px"}} >
        <div className="box">
           <Card style={{backgroundColor:"#e8eaed"}}>
      <CardContent>
        <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
         
          <h3> About</h3>
       
        </Typography>
        
       
        <Typography variant="body2">
        

Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
          <br />
       
        </Typography>
      </CardContent>
     
    </Card></div>
    <div className="box">
      <h4>Archives</h4>
      <h6><a href=""> March 2020</a></h6>

      <h6><a href=""> February 2020</a></h6>
      <h6><a href="">January 2020</a></h6>
      <h6><a href=""> November 1999</a></h6>
      <h6><a href=""> October 1999</a></h6>
      <h6><a href="">September 1999</a></h6>
      <h6><a href=""> August 1999</a></h6>
      <h6><a href=""> July 1990</a></h6>
      <h6><a href=""> June 1999</a></h6>
      <h6><a href=""> May 1999 </a></h6>
      <h6>  <a href=""> April 1999</a></h6>
      


<h1>Social</h1>

 <h5><a href=""> <GitHubIcon/> GitHub</a></h5>
 <h5><a href=""><TwitterIcon/>Twitter</a></h5>
 <h5><a href=""><FacebookIcon/>Facebook</a></h5>




    </div>
        </Grid>
       
      </Grid>
    </Box>
  );
}
