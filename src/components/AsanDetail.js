import React from 'react'
import { Typography, Stack, Box, Button } from '@mui/material';

const AsanDetail = ({ asanDetail }) => {
    const { english_name, pose_benefits
        , pose_description
        , sanskrit_name
        , url_png } = asanDetail;

    return (
        <Stack gap='90px' sx={{
            flexDirection: { lg: 'row' },
            p: '40px', alignItems: 'center'
        }}>
            <img src={url_png} alt={english_name} Loading="lazy"  width="600px" height="650px"
                 />

            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography sx={{ fontSize: { lg: '50px', xs: '25px' } }} fontWeight={700} textTransform="capitalize">
                    {english_name} Pose
                </Typography>
                <Stack sx={{
                    flexDirection: { lg: 'row', xs: "column", md: "column" },
                }}>
                    <Typography sx={{ fontSize: { lg: '40px', xs: '25px' } }} fontWeight={700} textTransform="capitalize">
                        Sanskrit Name :
                    </Typography>
                    
                    <Typography sx={{ fontSize: { lg: '30px', xs: '18px' },
                     mt:"10px", ml:{lg: "20px", xs:"0px"}, color:"#ff2625" }} fontWeight={700} textTransform="capitalize">
                          {sanskrit_name} 
                    </Typography>
                </Stack>


                <Typography sx={{ fontSize: { lg: '30px', xs: '20px' } }} 
                 fontWeight={700} textTransform="capitalize">
                    Benefits
                </Typography>
                <Typography sx={{ fontSize: { lg: '22px', xs: '17px' } , mt:"0px"}} color="#4F4C4C">
                    {pose_benefits}
                </Typography>
                <Typography sx={{ fontSize: { lg: '30px', xs: '20px' } }} 
                 fontWeight={700} textTransform="capitalize">
                    Description
                </Typography>
                <Typography sx={{ fontSize: { lg: '22px', xs: '17px' } }} color="#4F4C4C">
                    {pose_description}
                </Typography>

            </Stack>
        </Stack>
    )
}

export default AsanDetail
