import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51391206-f7366ee1e78940710a4e5645c';

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 9,
    },
  })
  .then(response => response.data.hits)
  .catch(error => {
    console.error('Error fetching images:', error.message);
    return [];
  });
}