import React from 'react'
import { Box, Container, Typography ,Button  } from '@mui/material'
import Grid from '@mui/material/Grid';
import  google from "../assets/google.png";
import  slack from "../assets/slack.png";
import  atlassian from "../assets/atlassian.png";
import  dropbox from "../assets/dropbox.png";
import  shopify from "../assets/shopify.png";



function Brands() {
  return (
    <div>
        <Box sx={{ flexGrow: 1  }}>
               <Container style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
            <Grid  container spacing={2} >
           
            <Grid item xs={4} sm={2}md={2} lg={2}>
                            <img src={google} alt="Google"></img>
                     </Grid>
                     <Grid item xs={4} sm={2}md={2} lg={2}>
                            <img src={slack} alt="Slack"></img>
                     </Grid> <Grid item xs={4} sm={2}md={2} lg={2}>
                            <img src={atlassian} alt="Atlassian"></img>
                     </Grid> <Grid item xs={6} sm={2}md={2} lg={2}>
                            <img src={dropbox} alt="Dropbox"></img>
                     </Grid> <Grid item xs={6} sm={2}md={2} lg={2}>
                            <img src={shopify} alt="Shopify"></img>
                     </Grid>
                    
            </Grid>
            </Container>
        </Box>
    </div>
  )
}

export default Brands