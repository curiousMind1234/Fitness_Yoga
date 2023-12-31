import React,{useEffect, useState} from 'react'
import {Box, Button, Stack,TextField, Typography} from '@mui/material';

import {fetchData, exercisesOptions} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExercises = ({setExercises,setBodyPart, activeBodyPart}) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      exercisesOptions);
      setBodyParts(['all',...bodyPartData]);
   }

   fetchExercisesData();
  }, []);

  
  const handleSearch = async () => {
       if(search) {
        const exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exercisesOptions
        );
       
        const searchedExercises = exercisesData.filter(
          (item) => item.name.toLowerCase().includes(search)
                 || item.target.toLowerCase().includes(search)
                 || item.equipment.toLowerCase().includes(search)
                 || item.bodyPart.toLowerCase().includes(search),
        );
        setSearch('');
        setExercises(searchedExercises);
        console.log("exercises", exercisesData)
       }
  }

  return (
    <Stack alignItems="center" sx={{mt:{lg:"0px", xs :"140px"}}}
    justifyContent="center" p="20px" >
        <Typography fontWeight={700}
        sx={{fontSize:{lg: '44px', xs:'30px'}}}
        mb="50px" textAlign="center">
            Awesome Exercises You <br/>
            Should know
        </Typography>
        <Box position="relative" mb="72px">
        <TextField 
        sx={{
            input: {fontWeight: '700',
            border :'none', 
            borderRadius:'4px'
        },
        width :{lg:'800px', xs:'350px'},
        backgroundColor : "#fff",
        borderRadius:'40px'
        }}
        height="76px"
        value={search}
        onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
        placeholder="Search Exercises"
        type="text" />
        <Button className="search-btn"
        sx={{
            bgcolor:'#FF2625',
            color:"#fff",
            textTransform :'none',
            width:{lg:'175px', xs:'80px'},
            fontSize :{lg:'20px', xs:'14px'},
            height:'56px',
            position : 'absolute',
            right:0
        }} onClick={handleSearch}>
          Search
        </Button>
        </Box>

        <Box sx={{position:'relative', width:'100%', p:'20px'}}>
             <HorizontalScrollbar data={bodyParts} bodyParts
              setBodyPart={setBodyPart} activeBodyPart={activeBodyPart}/>
        </Box>
    </Stack>
      
  )
}

export default SearchExercises
