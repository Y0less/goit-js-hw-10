import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  timeout: 1000,
  headers: {
    'x-api-key':
      'live_JYgccC7bYwsb3f7hjuFoTXDGpZhiyi90DkLlNJrnkmzpOZPem7EFTBs9AygD5rUL',
  },
});

export function fetchBreeds() {
  const END_POINT = '/breeds';
  return axiosInstance
    .get(END_POINT)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error.message);
      return error;
    });
}

export function fetchCatByBreed(breedId) {
  const END_POINT = 'images/search?breed_ids=';
  return axiosInstance
    .get(`${END_POINT}${breedId}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error.message);
      return error;
    });
}
