import { Box, Container, Typography ,Button } from '@mui/material'
import React ,{useState} from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import mask from "../assets/ai.png";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import 'animate.css';


function Header() {

   const[state ,setState] =useState(false);

     function zoomIn() {
    setState({ isZoomed: true });
  }
  
 function zoomOut() {
    setState({ isZoomed: false });
  }

  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <br/><br/><br/>
                <Typography variant='h2' className='head'>
                    Let's Build Something amazing with GPT-3 OpenAI
                </Typography><br/>
                <Typography variant='h6' color="#81AFDD">
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </Typography><br/><br/>
                <Box>
                <TextField id="outlined-size-normal" label="Email Address" variant="outlined" className='input' labelProps={{ style: { color: '#ffffff' } }} style={{marginTop:"20px"}} />
                <Button  variant="contained" size='large' style={{backgroundColor:"#FF4820" ,height:"55px" ,marginTop:"20px"}} >Get Started</Button>
                </Box>
                <br/>
                <Box style={{display:"flex" ,alignItems:"center"}}>
                <AvatarGroup total={24}>
      <Avatar alt="Remy Sharp" src={one} />
      <Avatar alt="Travis Howard" src={two} />
      <Avatar alt="Agnes Walker" src={four} />
      <Avatar alt="Trevor Henderson" src={five} />
     
    </AvatarGroup>
    <Typography  color="#81AFDD">1600 People Requested access in last 24 hours</Typography>
                </Box>

               
                </Grid>
                
                <Grid item xs={12} sm={6} md={6} lg={6} sx={{display:"flex",justifyContent:"center"}}>
                     <img className='animate__animated animate__zoomin' onClick={() => state ? zoomOut() : zoomIn()} src={mask} alt="not Loaded..." height="100%" width="100%" ></img>
                </Grid>
                </Grid>
                <br/><br/>
            </Container>
        </Box>
    </div>
  )
}

export default Header