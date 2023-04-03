import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Future() {
  return (
    <div ><br/><br/>
        <Box sx={{ flexGrow: 1  }}>
            <Container>
                <Grid container spacing={2} sx={{display:"flex" ,justifyContent:"space-between"}}>
                    <Grid xs={12} sm={12} md={6} lg={5} marginTop={3}>
                        <Grid>
                      <Typography variant='h4' className='head'>The Future is Now and you Just Need To Realize it.Step Into Future Today & Make it Happen</Typography><br/>
                      <Typography variant='h6' color="orange">Request Early Access To Get Started</Typography>
                      </Grid>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={2} paddingLeft={2} marginTop={3} rowSpacing={2}>
                         <Grid>
                         {/* <Typography variant='h4' className='head'>__</Typography> */}
                            <Typography variant='h6' color="white">Improving end distructs instantly</Typography>
                         </Grid>
                         <Grid>
                         <Typography variant='h4' className='head'>__</Typography>
                            <Typography variant='h6' color="white">Become the tended active</Typography>
                         </Grid><Grid>
                         <Typography variant='h4' className='head'>__</Typography>
                            <Typography variant='h6' color="white">Message or am nothing</Typography>
                         </Grid><Grid>
                         <Typography variant='h4' className='head'>__</Typography>
                            <Typography variant='h6' color="white">Really boy law county</Typography>
                         </Grid>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={4} paddingLeft={4} marginTop={3} rowSpacing={2} >
                            <Grid>
                                <Typography variant='h7' color="#81AFDD">From they fine john he give of rich he.They age and draw mrs like.Improving and distrusts may instantly was household applauded</Typography>
                            </Grid><br/>
                            <Grid>
                                <Typography variant='h7' color="#81AFDD">From they fine john he give of rich he.They age and draw mrs like.Improving and distrusts may instantly was household applauded</Typography>
                            </Grid><br/><br/>
                            <Grid>
                                <Typography variant='h7' color="#81AFDD">From they fine john he give of rich he.They age and draw mrs like.Improving and distrusts may instantly was household applauded</Typography>
                            </Grid><br/><br/> <Grid>
                                <Typography variant='h7' color="#81AFDD">From they fine john he give of rich he.They age and draw mrs like.Improving and distrusts may instantly was household applauded</Typography>
                            </Grid>
                 </Grid>
                </Grid>
            </Container>

        </Box>
        <br/><br/><br/>
    </div>
  )
}

export default Future