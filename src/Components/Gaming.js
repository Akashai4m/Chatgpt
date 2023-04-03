import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import possibility from "../assets/possibility.png";

function Gaming() {
  return (
    <div>
        <Box sx={{ flexGrow: 1  }}>
          <Container>
            <Grid container spacing={2} style={{display:"flex" ,justifyContent:"space-between"}}>
                <Grid xs={12} sm={12} md={6} lg={4} >
                  <img src={possibility} alt="loading..." width="100%" height="100%"></img>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6}>
                <Grid>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Typography variant='h6' color="#81AFDD">Request Early Access To Get Started</Typography><br/>
                <Typography variant='h3' className='head'>The possibilities are beyond your imagination</Typography><br/>
                <Typography variant='h6' color="#81AFDD">Yet bed any for travelling assitance indulgence unpleasing,Not thoughts all exercise blessing.indulgence way everything joy alteration boisterous the attachment.Party we years to order allow asked of.</Typography><br/>
                <Typography variant='h6' color="orange">Request Early Access To Get Started</Typography><br/>

               </Grid>
                </Grid>
                
            </Grid>
          </Container>
        </Box>
    </div>
  )
}

export default Gaming