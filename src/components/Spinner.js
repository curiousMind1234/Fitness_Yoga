import React from 'react'
import {InfinitySpin} from 'react-loader-spinner'
import {Stack} from '@mui/material';

const Spinner = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems='center' width="100%">
       <InfinitySpin color="grey"/>
    </Stack>
  )
}

export default Spinner