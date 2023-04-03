import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <div style={{color:"white",lineHeight:"25px" ,color:"#81AFDD"}}><br/>
        <Box sx={{ flexGrow: 1 }} >
            <Container >
                <Grid container spacing={2} sx={{display:"flex" ,justifyContent:"space-evenly"}} >
                     <Grid item xs={2} sm={2}md={2} lg={1.5}>
                            GPT-3
                     </Grid>
                     <Grid  sx={{ display: { xs: 'none' ,lg:"block"  } }} item xs={2} sm={2}md={2} lg={1.5} className="home">
                         Home
                     </Grid>
                      <Grid  sx={{ display: { xs: 'none' ,lg:"block"  } }} item xs={2} sm={2}md={2} lg={1.5} className="gpt">
                         What is GPT?
                     </Grid>
                      <Grid  sx={{ display: { xs: 'none' ,lg:"block"  } }} item xs={2} sm={2}md={2} lg={1.5} className="open">
                         Open AI
                     </Grid>
                     
                      <Grid  sx={{ display: { xs: 'none' ,lg:"block"  } }} item xs={2} sm={2}md={2} lg={1.5} className="home">
                         Case Studies
                     </Grid>
                       <Grid  sx={{ display: { xs: 'none' ,lg:"block"  } }} item xs={2} sm={2}md={2} lg={1.5} className="home">
                         Library
                     </Grid>
                     <Grid item xs={2} sm={2}md={2} lg={1.5} rowSpacing={3}>
                     <Button style={{color: '#81AFDD'}}>SignIn</Button>
                     </Grid>
                      <Grid item xs={2} sm={2}md={2} lg={1.5} rowSpacing={1}>
                      <Button variant="contained" style={{backgroundColor:"#FF4820"}} >SignUp</Button>
                     </Grid>
                </Grid>
                </Container>
        </Box>
    </div>
  )
}

export default Navbar