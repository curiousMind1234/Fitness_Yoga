import React from 'react'
import { Box, Typography, Stack } from '@mui/material';

import Logo from '../assets/icons/logo11.png';

const Footer = () => {
  return (
    <Box   backgroundColor="#DAFFFB">
    <Stack gap="40px" alignItems="center" flexWrap="wrap" px="40px" pt="24px">
    <img src={Logo} alt="logo" style={{
          width: '78px', height: '78px', marginTop:"40px"
        }}
        />
        <Typography variant="h4" fontWeight={700}>HealthHub</Typography>
    </Stack>
    
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by curiousMind</Typography>
  </Box>

  )
}



export default Footer
