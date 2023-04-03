import { Box, Container, Typography ,Grid, Button } from '@mui/material'
import React from 'react'

function Register() {
  return (
    <div><br/><br/><br/><br/>
        <Box>
            <Container style={{backgroundColor:"#ffafbd" ,borderRadius:"16px"}}><br/>
            <Typography>Request early access to get started</Typography><br/>
            <Grid  container sx={{display:"flex"}}>
            <Grid xs={12} sm={12} md={6} lg={10}>
            <Typography variant='h5'><b>Register Today & start exploring the endless possibilities</b></Typography>
            </Grid>
            <Grid xs={12} sm={12} md={6} lg={2} marginBottom={2} marginTop={2}>
           <Button size='large' style={{backgroundColor:"black" ,color:"white" ,borderRadius:"16px"}}>Get Started</Button>
            </Grid><br/><br/><br/>
            </Grid>

            </Container>
<br/><br/>
            <Box>
                <Container>
                    <Grid lg={4}>
                    <Typography variant='h4' className='head'>A lot is happening,<br/>We are blogging about it.</Typography>
                    </Grid>
                </Container>
            </Box>
        </Box>
        <br/><br/><br/>
    </div>
  )
}

export default Register