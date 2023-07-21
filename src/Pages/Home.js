import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import { Box } from '@mui/material';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all')
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises}
         setBodyPart={setBodyPart} activeBodyPart={bodyPart}/>
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart} />
    </Box>

  )
}

export default Home
