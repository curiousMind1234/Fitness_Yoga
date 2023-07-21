import React, {useEffect, useState} from 'react'
import {Box} from '@mui/material';
import {useParams} from 'react-router-dom';

import {fetchData, youTubeVideoOptions} from '../utils/fetchData';
import AsanDetail from '../components/AsanDetail';
import AsanVideo from '../components/AsanVideo';

const YogaDetail = () => {
    const [asanDetail, setAsanDetail] = useState({});
    const [asanVideos, setAsanVideos] = useState([]);
    // const [targetMuscleData, setTargetMuscleData] = useState([]);
    // const [equipmentData, setEquipmentData] = useState([])
    const {id} = useParams();
    
  
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  
        const fetchExerciseData = async() => {
            const resp = await fetch(`https://yoga-api-nzy4.onrender.com/v1/poses?id=${id}`);
            const asanasData = await resp.json();
            console.log("id data:", asanasData)
            setAsanDetail(asanasData)
          const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const yogaVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${asanasData.english_name} exercise`, youTubeVideoOptions);
            setAsanVideos(yogaVideoData.contents);
            console.log("videoData:",yogaVideoData);
        }
        fetchExerciseData();
    },[id]);
    if (!asanDetail) return <div>No Data</div>;

    return (
      <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
         <AsanDetail asanDetail={asanDetail}/>
         <AsanVideo asanVideos={asanVideos} name={asanDetail.english_name}/>
      </Box>
    )
}

export default YogaDetail
