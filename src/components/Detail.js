import React from 'react'
import { Typography, Stack, Box,Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]

    return (
        <Stack gap='100px' sx={{
            flexDirection: { lg: 'row' },
            p: '20px', alignItems: 'center',
                
        }} backgroundColor="#001C30"
        >
            <img src={gifUrl} alt={name} Loading="lazy"
                className="detail-image"/>

            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography sx={{ fontSize: { lg: '50px', xs: '25px' } }} 
                fontWeight={700} textTransform="capitalize" color="#FF2625">
                    {name}
                </Typography>
                <Typography sx={{ fontSize: { lg: '22px', xs: '15px' } }} color="#F8F1F1">
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
                    of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                    <br /> mood and gain energy.
                </Typography>
                {
                    extraDetail?.map((item) => (
                        <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                                <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                            </Button>
                            <Typography variant= "h6" textTransform="capitalize"
                            color="#FF2625" sx={{ fontSize: { lg: '22px', xs: '15px' } }}>
                                {item.name}
                            </Typography>
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default Detail
