import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Spinner from './Spinner';

const AsanVideo = ({asanVideos, name}) => {
    console.log("name in videos:", name)
    if (!asanVideos.length) return <Spinner />
    return (
      <Box sx={{ marginTop: { lg: '80px', xs: '20px' }, marginLeft: '10px' }} p='30px' ml='10px 10px'>
        <Typography variant="h3" mb="60px" fontSize='40px' fontWeight="600">
          Watch <span style={{ color: "#ff2625", textTransform: 'capitalize' }}>{name}</span> Yoga Pose videos
        </Typography>
        <Stack justifyContent='flex-start' flexWrap='wrap'
          alignItems='center'
          sx={{
            flexDirection: { lg: 'row' },
            gap: { lg: '80px', xs: '20px' }
          }}
        >
          {
            asanVideos?.slice(0, 6).map((item, index) => (
              <a key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.video.thumbnails[0].url}
                  alt={item.video.title} />
  
                <Box >
                  <Typography sx={{ fontSize: { lg: '22px', xs: '18px' } }} color="#000" mb="10px">
                    {item.video.title}
                  </Typography>
                  <Typography sx={{ fontSize: { lg: '21px', xs: '17px' } }} color="#700c04" fontWeight="700">
                    {item.video.channelName}
                  </Typography>
                </Box>
              </a>
  
            ))
          }
        </Stack>
      </Box>
    )
}

export default AsanVideo
