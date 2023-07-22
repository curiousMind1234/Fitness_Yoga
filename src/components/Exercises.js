import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Typography, Stack } from '@mui/material';

import { exercisesOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    console.log("in exercise:", exercises )
   const [currentPage, setCurrentPage] = useState(1);
   const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises =  exercises.slice(indexOfFirstExercise, indexOfLastExercise);
    console.log("first:",indexOfFirstExercise )
    console.log("last:", indexOfLastExercise)
    console.log("current:",currentExercises )

   const paginate = (e, value)=>{
      setCurrentPage(value);
      window.scrollTo({top:1800, behavior: 'smooth'})
   };

   useEffect(() => {
    const fetchExercisesData = async () => {
        let exercisesData = [];
        if(bodyPart === 'all'){
            exercisesData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises',
                exercisesOptions
              );
        }
        else {
            exercisesData = await fetchData(
                `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                exercisesOptions
              );
        }
        setExercises(exercisesData);
    }
    fetchExercisesData();
   }, [bodyPart]);

   
    return (
        <Box
            id="exercises"
            sx={{ mt: { lg: '109px' } }}
            mt="50px"
            p='20px'
            backgroundColor ="#001C30"
        >
            <Typography variant='h4' mb='46px' fontWeight='bold'
                sx={{ fontSize: { lg: '44px', xs: '30px' }, ml: { sm: '50px', md:'100px' } }} 
                color="#F8F1F1"
                >
                Showing Results
            </Typography>
            <Stack direction="row" sx={{ gap: { lg: '60px', xs: '50px' }}}
                flexWrap="wrap"
                ml = "30px"
                justifyContent="center">
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>
            <Stack mt='100px' alignItems='center'>
              {exercises.length > 9 && (
                <Pagination
                    color="standard"
                    shape="rounded"
                    defaultPage={1}
                    count={Math.ceil(exercises.length/
                    exercisesPerPage)}
                    page={currentPage}
                    onChange={paginate}
                    size="large"
                    sx={{
                        ".page-item .page-link": {
                          color: "red",
                        },
                      }}
                />
              )}
            </Stack>
        </Box>
    )
}

export default Exercises
