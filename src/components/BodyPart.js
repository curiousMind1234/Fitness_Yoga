import React,{useState} from 'react'
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ activeBodyPart, setBodyPart, bodyPart}) => {
    
    const image = require(`../assets/images/bodypart/${bodyPart}.jpg`);
   
    return (
        <Stack type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === activeBodyPart ? '4px solid #ff2625' : '',
                backgroundColor: "#fff",
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px ',
                cursor: 'pointer',
                gap: '47px'
            }}
            onClick={()=>{
                setBodyPart(bodyPart);
                window.scrollTo({top:1800, left:100, behavior:'smooth'})
            
            }}
        >
            <img
                src= {image}
                alt='dumbell'
                style={{ width: '100px', height: '100px' }}
            />
            <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
                {bodyPart}
            </Typography>
        </Stack>
    )
}

export default BodyPart
