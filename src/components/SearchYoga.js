import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import YogaScrollbar from './YogaScrollbar';


const SearchYoga = ({ setCategory, setAsanas, activeCategory, setYogaPoses }) => {
    const [search, setSearch] = useState('');

    const [allCategory, setAllCategory] = useState([]);

    useEffect(() => {
        const fetchYogaData = async () => {
            const response = await fetch("https://yoga-api-nzy4.onrender.com/v1/categories");
            const data = await response.json();
            console.log("yoga:", data);

            const categoryNames = []
            const poses = [];
            data && (data.map((item) => (
                categoryNames.push(item.category_name),
                item.poses.map((pose) => (
                    poses.push(pose)
                ))
            )))
            setYogaPoses(poses)
            setAllCategory(['all', ...categoryNames])
        }
        fetchYogaData();
    }, []);


    const handleSearch = async () => {
        if (search) {
            const response = await fetch("https://yoga-api-nzy4.onrender.com/v1/categories");
            const data = await response.json();

            const searchedYoga = data.find(
                (item) => (item.category_name.toLowerCase().includes(search))
            );
            let poses = [];

            const category = searchedYoga.category_name
            console.log("searchedData", category)
            const resp = await fetch(`https://yoga-api-nzy4.onrender.com/v1/categories?name=${category}`);
            const asanasData = await resp.json();
            asanasData && (
                asanasData.poses.map((pose) => (
                    poses.push(pose)
                ))
            )
            setYogaPoses(poses);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            setSearch('')
            setCategory(category)
        }
    }

    return (
        <Stack alignItems="center" sx={{mt:{lg:"0px", xs :"140px"}}}
            justifyContent="center" p="20px">
            <Typography fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                mb="50px" textAlign="center">
                Awesome Yoga-Poses You <br />
                Should know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: { lg: '800px', xs: '350px' },
                        backgroundColor: "#fff",
                        borderRadius: '40px'
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
                    placeholder="Search Exercises"
                    type="text" />
                <Button className="search-btn"
                    sx={{
                        bgcolor: '#FF2625',
                        color: "#fff",
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: 0
                    }} onClick={handleSearch}>
                    Search
                </Button>
            </Box>

            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <YogaScrollbar
                    data={allCategory} allCategory setCategory={setCategory}
                    activeCategory={activeCategory} />
            </Box>
        </Stack>
    )
}

export default SearchYoga
