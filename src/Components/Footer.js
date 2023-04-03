import { Container ,Grid ,Box, Typography, Button } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div >
        <Box>
            <Container className='wholebg'>
                <Grid container spacing={2} sx={{display:"flex" ,justifyContent:"center"}} >
                    <Grid lg={6} xs={12} marginTop={8} >
                       
                            <Typography style={{display:"flex" ,justifyContent:"center" ,alignItems:"center"}} variant='h3' className='head'>Do You Want To Step In To The future before others</Typography><br/><br/>
                           
                        
                    
                    <Grid lg={12}  marginTop={4}>
                    <Button  variant='outlined'> Request Early Access</Button>
                    </Grid><br/><br/>
</Grid>
                </Grid>
           
       
        <br/><br/>
       
           
                <Grid container spacing={2} style={{display:"flex" , flexWrap:"wrap" , justifyContent:"space-between"}} >
                     <Grid lg={3}>
                        <Typography variant='h5' color="white">Gpt-3</Typography>
                        <br/>
                        <Typography variant='h10' color="white">Crechterwoord K12 182 </Typography><br/><br/>
                        <Typography variant='h8' color="white">All Rights Reserved</Typography>
                     </Grid>
                     <Grid lg={3}  >
                          <Typography variant='h7'color="white">Links</Typography><br/><br/>
                          <Typography variant='h8'color="white">Overons </Typography><br/>  <br/>
                          <Typography variant='h8'color="white">Social Media </Typography><br/><br/>
                            <Typography variant='h8'color="white">Counters</Typography><br/> <br/>
                           <Typography variant='h8'color="white">Contact</Typography><br/><br/>

                     </Grid>
                     <Grid lg={3}>
                          <Typography variant='h7'color="white">Company</Typography><br/><br/>
                          <Typography variant='h8'color="white">Terms & Conditions </Typography><br/> <br/> 
                          <Typography variant='h8'color="white">Privacy Policy </Typography><br/><br/> 
                           <Typography variant='h8'color="white">Contact</Typography><br/><br/>

                     </Grid>
                     <Grid lg={3}  sx={{ display: { xs: 'none' ,lg:"block"  } }} >
                          <Typography variant='h7'color="white">Get in Touch</Typography><br/><br/>
                          <Typography variant='h8'color="white">Crechterwoord K12 182 DK Alknjkcb </Typography><br/><br/>  
                          <Typography variant='h8' color="white">085-132567 </Typography><br/><br/>
                            <Typography variant='h8' color="white">info@payme.net</Typography><br/> 
                     </Grid>  
                </Grid>
                <br/><br/>
            </Container>
        </Box>
    </div>
  )
}

export default Footer