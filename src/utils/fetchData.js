export const exercisesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5b67b6aca5msh200bf70a5ba057bp171283jsn87829d7c099f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youTubeVideoOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5b67b6aca5msh200bf70a5ba057bp171283jsn87829d7c099f',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const bmiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5b67b6aca5msh200bf70a5ba057bp171283jsn87829d7c099f',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};



export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }
  catch (err) {
    console.error(err);
  }
};