import React from 'react'
import { Box, Typography, Button } from '@mui/material';

import imgSource from "../assets/images/about-banner.png";
import imgSource1 from "../assets/images/about-circle-one.png"
import imgSource2 from "../assets/images/about-circle-two.png";

const YogaBanner = () => {
  return (

    <Box sx={{
      mt: { lg: '150px', xs: '70px' },
      ml: { sm: '50px', md: '100px' }
    }}
    >
      <Typography color="#FF2625"
        fontWeight="600" fontSize="35px" >
        HealthHub
      </Typography>

      <Typography fontWeight={700}
        sx={{ fontSize: { lg: '60px', xs: '23px', md: "50px" } }}
        mb="23px" mt="30px" color="#F8F1F1">
        Inhale the future <br /> Exhale the past
      </Typography>

      <Typography fontSize="22px" lineHeight="35px"
        mb={3} color="#E8AA42" fontWeight={500} >
        Check out the most effective Yoga Asanas
      </Typography>

      <Button variant="contained" color="error" href="#exercises"
        sx={{ backgroundColor: '3ff2625', padding: '10px' }}
      >
        Expolre Asanas
      </Button>
      <Typography fontWeight={600}
        color="#ff2625" sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" }, fontSize: '200px'
        }}>Yoga Asanas</Typography>
      <img src={imgSource1} alt="HeroBanner" position="absolute"
        className="hero-banner-img1" >
      </img>
      <img src={imgSource2} alt="HeroBanner" position="absolute"
        className="hero-banner-img2" >
      </img>
      <img src={imgSource} alt="HeroBanner" position="absolute" 
        className="yoga-banner" >
      </img>
    </Box>


  )
}

export default YogaBanner
