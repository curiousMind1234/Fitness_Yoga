import React, {useEffect, useState} from 'react'
import {Box} from '@mui/material';
import {useParams} from 'react-router-dom';

import {fetchData, exercisesOptions, youTubeVideoOptions} from '../utils/fetchData';
import ExerciseVideos from '../components/ExerciseVideos';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleData, setTargetMuscleData] = useState([]);
  const [equipmentData, setEquipmentData] = useState([])
  const {id} = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

      const fetchExerciseData = async() => {
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions);
       
        setExerciseDetail(exerciseDetailData);
        
        
          const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youTubeVideoOptions);
          setExerciseVideos(exerciseVideoData.contents);
          console.log("videoData:",exerciseVideoData)

          const targetMuscleData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exercisesOptions)
        setTargetMuscleData(targetMuscleData);

        const equipmentData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exercisesOptions)
        setEquipmentData(equipmentData);
        
      }
      fetchExerciseData();
  },[id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleData={targetMuscleData} equipmentData={equipmentData}/>
    </Box>
  )
}

export default ExerciseDetail
