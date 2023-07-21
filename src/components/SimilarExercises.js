import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Spinner from './Spinner';
import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({ targetMuscleData, equipmentData }) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}
        >
            <Typography variant='h3' mb={5}>
                Similar <span style={{color:"#ff2625", textTransform:'capitalize'}}>target muscle</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
                {targetMuscleData.length ?
                <HorizontalScrollbar data={targetMuscleData}/> : <Spinner/>}
            </Stack>

            <Typography variant='h3' mb={5} mt={5}>
            Similar <span style={{color:"#ff2625", textTransform:'capitalize'}}>equipment</span> exercises
            </Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
                {equipmentData.length ?
                <HorizontalScrollbar data={equipmentData}/> : <Spinner/>}
            </Stack>


        </Box>
        
    )
}

export default SimilarExercises
