import React from 'react'
import { Stack, Typography } from '@mui/material';

import image from '../assets/images/yoga/all.png';

const YogaAsan = ({ setCategory, asana, activeCategory }) => {

    return (
        <Stack type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: asana !== activeCategory ? '4px solid #ff2625' : '',
                backgroundColor: "#fff",
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px ',
                cursor: 'pointer',
                gap: '47px'
            }}
            onClick={() => {
                setCategory(asana);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            }}
        >
            <img
                src={image}
                alt='dumbell'
                style={{ width: '150px', height: '150px' }}
            />
            <Typography fontSize="24px" fontWeight="bold" color="#3A1212">
                {asana}
            </Typography>
        </Stack>
    )
}

export default YogaAsan
