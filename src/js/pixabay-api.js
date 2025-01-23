import axios from 'axios';

export const fetchImages = (searchedQuery,currentPage) => {

  const axiosOptions = {
    params: {
    q: encodeURIComponent(searchedQuery),
    key: '48226590-99b6af351d6e3a0b674791be6', 
    per_page: 15,
    page: currentPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    }
  }

    return axios.get(`https://pixabay.com/api/`,axiosOptions)
  };

    

  
    


