import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Stack, Typography } from '@mui/material';


const CategoryCard = ({ asan }) => {
   
    return (
        <Box direction="row">
            <Link to={`/yoga-details/${asan.id}`} >
                <Stack className="yoga-card" textDecoration="none">
                    <img
                        src={asan.url_svg}
                        alt={asan.english_name}
                        Loading="lazy"
                        className="yoga-img"
                    />
                    <Stack direction="row">
                        <Button sx={{
                            ml: '21px', color: '#fff', background: '#ffa9a9',
                            fontSize: '15px', borderRadius: '20px', textTransform: 'capitalize'
                        }}>
                            {asan.category_name}
                        </Button>
                        <Button sx={{
                            ml: '21px', color: '#fff', background: '#fcc757',
                            fontSize: '18px', borderRadius: '20px', textTransform: 'capitalize'
                        }}>
                            {asan.english_name}
                        </Button>

                    </Stack>
                </Stack>
            </Link>
        </Box>

    )
}

export default CategoryCard
