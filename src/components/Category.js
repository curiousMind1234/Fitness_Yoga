import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Typography, Stack } from '@mui/material';
import CategoryCard from './CategoryCard';
import Spinner from './Spinner';

const Category = ({ setAsanas, asanas, category, setYogaPoses, yogaPoses }) => {
    console.log("category:", category)

    console.log("yogaPose:", yogaPoses)
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = yogaPoses.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' })
        console.log("paginate:", value)
    };

    useEffect(() => {
        const fetchCategoryData = async () => {
            let asanasData = [];
            const poses = [];
            if (category === 'all' && yogaPoses) {
                const response = await fetch("https://yoga-api-nzy4.onrender.com/v1/categories");
                asanasData = await response.json();
                console.log("yoga in category:", asanasData);

                asanasData && (
                    asanasData.map((item) => (
                        item.poses.map((pose) => (
                            poses.push(pose)
                        ))
                    ))
                )
            }
            else {
                const response = await fetch(`https://yoga-api-nzy4.onrender.com/v1/categories?name=${category}`);
                asanasData = await response.json();
                console.log("yoga in else category:", asanasData);

                asanasData && (
                    asanasData.poses.map((pose) => (
                        poses.push(pose)
                    ))
                )
            }

            setYogaPoses(poses);

        }
        fetchCategoryData();
    }, [category]);

    return (
        <Box
            id="exercises"
            sx={{ mt: { lg: '109px' } }}
            mt="50px"
            p='20px'
            backgroundColor ="#001C30"
        >
            <Typography variant='h4' mb='46px' fontWeight='bold'
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}color="#F8F1F1">
                Showing Results
            </Typography>
            
            <Stack direction="row" sx={{ gap: { lg: '60px', xs: '50px' } }}
                flexWrap="wrap"
                justifyContent="center">
                    {(!currentExercises.length) ? <Spinner /> : ""}
                {currentExercises.map((asan, index) => (
                    <CategoryCard key={index} asan={asan} />
                ))}

            </Stack>
            <Stack mt='100px' alignItems='center'>
                {yogaPoses.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(yogaPoses.length /
                            exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Category
