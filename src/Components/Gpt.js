import { Box, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Gpt() {
  return (
    <div >
        <Box sx={{ flexGrow: 1  }}><br/><br/>
            <Container className='wholebg'><br/><br/>
           <Grid container spacing={2}>
            <Grid xs={12} sm={12}md={4} lg={3} >
                <Typography variant='h5'color="#ffffff" marginLeft={2}>What is GPT-3</Typography>
            </Grid>
            <Grid xs={12} sm={12}md={8} lg={9}>
                <Typography variant='h6'color="#81AFDD" marginRight={2}>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</Typography>
            </Grid><br/><br/>
           
            <Grid xs={12} sm={12}md={4} lg={5}><br/><br/>
            <Typography variant='h4' className='head'marginLeft={2}>
                    The Possibilities are beyond your imagination
                </Typography><br/>
            </Grid >
            <Grid lg={5}></Grid>
            <Grid xs={12} sm={12}md={4} lg={2} ><br/><br/>
            <Typography variant='h6' className='head' >
                    Explore The Library
                </Typography><br/>
            </Grid>
           <br/><br/>
           <Grid m={2} sx={{display:"flex" ,flexWrap:"wrap"}}>
               <Grid xs={12} sm={12} md={6} lg={4}>
                    <Grid xs={12}>
                      <Typography variant='h4' className='head'>__</Typography><br/>
                      <Typography variant='h5' color="white">Chatbots</Typography>
                    </Grid><br/><br/>
                    <Grid>
                      <Typography variant='h6' color="#81AFDD">we so opinion friends me message as delight.Whole front do of plate heard ohought</Typography>
                    </Grid>
                    
               </Grid>
               <Grid xs={12 }sm={12} md={6} lg={4} >
                    <Grid xs={12} >
                    <Typography variant='h4' className='head'>__</Typography><br/>
                      <Typography variant='h5' color="white">Knowledgebase</Typography>
                    </Grid><br/><br/>
                    <Grid>
                      <Typography variant='h6' color="#81AFDD">we so opinion friends me message as delight.Whole front do of plate heard ohought</Typography>
                    </Grid>
                    
               </Grid> <Grid xs={12} sm={12} md={6} lg={4}>
                    <Grid xs={12}>
                    <Typography variant='h4' className='head'>__</Typography><br/>
                      <Typography variant='h5' color="white">Education</Typography>
                    </Grid><br/><br/>
                    <Grid>
                      <Typography variant='h6' color="#81AFDD">we so opinion friends me message as delight.Whole front do of plate heard ohought</Typography>
                    </Grid>
                    
               </Grid>
           </Grid>
           </Grid>
           </Container>
        </Box>
        <br/><br/>
    </div>
  )
}

export default Gpt