import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

//import Logo from '../assets/images/Logo.png';
import Logo from '../assets/icons/logo2.png';
const Fitness = () => {
    return (
        <Stack direction="row"
          justifyContent="space-around"
          sx={{
            gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' },
            justifyContent: 'none'
          }} px="20px">
          <Stack direction="row" gap="20px">
            <Link to='/'>
              <img src={Logo} alt="logo" style={{
                width: '78px', height: '78px', margin: '40px 20px'
              }}
              />
            </Link>
            <Typography style={{
              textDecoration: 'none', color: "#093c1c",
            }} fontSize="40px" mt="20px" fontWeight="700">
              Fit and Thrive
            </Typography>
          </Stack>
    
          <Stack direction="row" gap="40px"
            fontSize="24px"
            alignItems="flex-end">
            <Link to='/' style={{
              textDecoration: 'none', color: "#3A1212",
              borderBottom: '3px solid #FF2625'
            }} >Home</Link>
            {/* <a href="#exercises" style={{
              textDecoration:'none', color : "#3A1212"
            }}>Exercises</a> */}
    
            <Link to='/bmi-calculator' style={{
              textDecoration: 'none', color: "#3A1212",
            }}>Check BMI</Link>
    
            <Link to='/yoga' style={{
              textDecoration: 'none', color: "#3A1212",
            }}>Yoga-Aasanas</Link>
          </Stack>
        </Stack>
      )
}

export default Fitness
