import React, { useState } from 'react'
import { Box } from '@mui/material';
import YogaBanner from '../components/YogaBanner';
import SearchYoga from '../components/SearchYoga';
import Category from '../components/Category';

const Yoga = () => {
   const [asanas, setAsanas] = useState([]);
   const [category, setCategory] = useState('all');
   const [yogaPoses, setYogaPoses] = useState([]);
  
  return (
    <Box>
      <YogaBanner />
      <SearchYoga  setCategory={setCategory} setAsanas={setAsanas} activeCategory={category}
      setYogaPoses={setYogaPoses}/>
      <Category setAsanas={setAsanas} setYogaPoses={setYogaPoses} yogaPoses={yogaPoses}
      category={category} asanas={asanas}/>

    </Box>

  )
}

export default Yoga
