import React from 'react'
import { Box, Typography, Button } from '@mui/material';

import imgSource from "../assets/images/yoga/icon.jpg";

const YogaBanner = () => {
  return (

    <Box className="yoga-banner" sx={{md: "75vh"  }} >
      <Box sx={{
        mt: { lg: "180px", xs: "120px" },
        ml:"80px"
      }} position="absolute" >
        <Typography color="#FF2625"
          fontWeight="600" fontSize="26px" >
          Fitness Club
        </Typography>

        <Typography fontWeight={700} fontSize={40}
          sx={{ fontsize: { lg: '3rem', xs: '90px' } }}
          mb="23px" mt="30px"
         color="#E8F6EF">
          Inhale the future <br /> Exhale the past
        </Typography>

        <Typography fontSize="22px" lineHeight="35px"
          mb={3} color="#FFF9C9">
          Check out the most effective Yoga Asanas
        </Typography>

        <Button variant="contained" color="error" href="#exercises"
          sx={{ backgroundColor: '3ff2625', padding: '10px' }}
        >
          Expolre Asanas
        </Button>
        
          <img src={imgSource} alt="HeroBanner" position="absolute"  sx={{
            width:{lg:"400px",md:"350px"},
            mt:{lg:'212px', xs:"160px", md:"-200px"}
          }}
          className="yoga-banner-img">
      </img>
      </Box>
    </Box>

  )
}

export default YogaBanner
