export const exercisesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7ba70c57d4mshccffc39799dfe36p1b7f7cjsn2fa9b346fa74',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youTubeVideoOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7ba70c57d4mshccffc39799dfe36p1b7f7cjsn2fa9b346fa74',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const bmiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7ba70c57d4mshccffc39799dfe36p1b7f7cjsn2fa9b346fa74',
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