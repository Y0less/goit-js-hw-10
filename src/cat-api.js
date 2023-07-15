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
  return axiosInstance
    .get('/breeds')
    .then(function (response) {
      //   return response;
      //   console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

export function fetchCatByBreed(breedId) {
  return axiosInstance
    .get(`images/search?breed_ids=${breedId}`)
    .then(function (response) {
      //   return response;
      // console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
