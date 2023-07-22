import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import ExerciseDetail from './Pages/ExerciseDetail';
import Footer from './components/Footer';
import BMICalc from './Pages/BMICalc';
import Yoga from './Pages/Yoga';
import YogaDetail from './Pages/YogaDetail';

import imgSource from "./assets/images/bg.jpg";

const App = () => {
  const styles={
    herobanner :{
      backgroundImage : `url(${imgSource})`
    }
 }
  return (
    <Box   sx={{height : {lg: "860px", xs :"598px", md:"700px" , sm:"600px" }, 
    }} backgroundColor="#001C30">
      
      <Navbar />
      <Routes  > 
        <Route path='/' element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/bmi-calculator" element={<BMICalc />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path ="/yoga-details/:id" element={<YogaDetail/>}/>
      </Routes>
      <Footer />
    </Box>

  )
}

export default App
