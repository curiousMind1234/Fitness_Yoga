import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import imgSource from "../assets/images/hero-banner.png"
import imgSource1 from "../assets/images/about-circle-one.png"
import imgSource2 from "../assets/images/about-circle-two.png"

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '150px', xs: '70px' },
      ml: { sm: '90px', md:'100px', xs:"100px" }
    }}
    >
      <Typography color="#FF2625" 
        fontWeight="600" fontSize="35px" >
        HealthHub
      </Typography>

      <Typography fontWeight={700} 
        sx={{ fontSize: { lg: '60px', xs: '23px', md:"50px" } }}
        mb="23px" mt="30px" color="#F8F1F1">
        Sweat Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px"
        mb={3} color="#E8AA42" fontWeight={500} >
        Check out the most effective exercises
      </Typography>

      <Button variant="contained" color="error" href="#exercises"
      sx={{backgroundColor:'3ff2625', padding:'10px'}}
      >
        Expolre Exercises
      </Button>
      <Typography fontWeight={600}
        color="#ff2625" sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" }, fontSize: '200px'
        }}>Exercise</Typography>
        <img src={imgSource1} alt="HeroBanner" position="absolute"
        className="hero-banner-img1" >
      </img>
      <img src={imgSource2} alt="HeroBanner" position="absolute"
        className="hero-banner-img2" >
      </img>
      <img src={imgSource} alt="HeroBanner" position="absolute"
        className="hero-banner-img" >
      </img>
    </Box>
  )
}

export default HeroBanner
