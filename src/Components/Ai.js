import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import blog01 from "../assets/blog01.png";

function Ai() {
  return (
    <div>
        <Box sx={{ flexGrow: 1  }}>
            <Container>
                <Grid container spacing={4} style={{display:"flex" ,justifyContent:"center"}}>
                    <Grid xs={12} sm={12} md={6} lg={4}>
                    <Card sx={{ maxWidth: 345 ,backgroundColor:"#152238" ,color:"white" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="432"
          image={require('../assets/blog01.png')}
          alt="green iguana"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" >
            GPT-3(blog-01)
          </Typography>
          <Typography variant="body2" color="white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={4}>
                              <Grid>
                              <Card sx={{ maxWidth: 345 ,backgroundColor:"#152238" ,color:"white" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/blog02.png')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          GPT-3(blog-02)
          </Typography>
          <Typography variant="body2" color="white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                              </Grid><br/>
                              <Grid>
                              <Card sx={{ maxWidth: 345,backgroundColor:"#152238" ,color:"white" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/blog03.png')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          GPT-3(blog-03)
          </Typography>
          <Typography variant="body2" color="white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                              </Grid>
                     </Grid>
                     <Grid xs={12} sm={12} md={6} lg={4}>
                              <Grid>
                              <Card sx={{ maxWidth: 345,backgroundColor:"#152238" ,color:"white" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/blog04.png')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          GPT-3(blog-04)
          </Typography>
          <Typography variant="body2" color="white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                              </Grid><br/>
                              <Grid>
                              <Card sx={{ maxWidth: 345,backgroundColor:"#152238" ,color:"white" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../assets/blog05.png')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          GPT-3(blog-05)
          </Typography>
          <Typography variant="body2" color="white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                              </Grid>
                     </Grid>

                </Grid>
            </Container>
        </Box>
        <br/><br/> <br/><br/>
    </div>
  )
}

export default Ai