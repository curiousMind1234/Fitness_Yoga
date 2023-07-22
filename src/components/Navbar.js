import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

import Logo from '../assets/icons/logo11.png';

const Navbar = () => {
  return (
    <Stack direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: '100px', xs: '40px' },
        justifyContent: 'none'
      }}  
      
       position="relative" >
      <Link to='/'>
        <img src={Logo} alt="logo" style={{
          width: '78px', height: '78px', margin: '40px 20px'
        }}
        />
      </Link>
      <Stack direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end" style={{margin:"50px 20px"}}>
        <Link to='/' style={{
          textDecoration: 'none', color: "#FF2625",
          borderBottom: '3px solid #F8F1F1'
        }}>Home</Link>
        {/* <a href="#exercises" style={{
          textDecoration:'none', color : "#3A1212"
        }}>Exercises</a> */}

        <Link to='/bmi-calculator' style={{
          textDecoration: 'none', color: "#FF2625",
        }}>Check BMI</Link>

        <Link to='/yoga' style={{
          textDecoration: 'none', color: "#FF2625",
        }}>Yoga-Aasanas</Link>
      </Stack>
    </Stack>
  )
}

export default Navbar
