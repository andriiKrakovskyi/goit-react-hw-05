import axios from 'axios';
import.meta.env.VITE_API_KEY;
import.meta.env.VITE_API_READ_ACCESS_TOKEN;

// const apiKey = import.meta.env.VITE_API_KEY;
const apiReadAccessToken = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer ${apiReadAccessToken}`;

// export const fetchTrendingMovies = async () => {
//   const response = await axios.get('/trending/movie/day');
//   return response.data.results;
// };

// export const fetchMovies = async (query) => {
//   const response = await axios.get('/search/movie', {
//     params: {
//       query: query,
//       include_adult: true,
//       language: 'en-US',
//     },
//   });
//   // console.log('fetchMovies', response.data);
//   return response.data.results;
// };

// export const fetchMoviesById = async (movieId) => {
//   const response = await axios.get(`/movie/${movieId}`);
//   // console.log('fetchMoviesById response.data', response.data);
//   return response.data;
// };

// export const fetchCastById = async (movieId) => {
//   const response = await axios.get(`/movie/${movieId}/credits`);
//   // console.log('fetchCastById  response.data.cast', response.data.cast);
//   return response.data.cast;
// };

// export const fetchReviewsById = async (movieId) => {
//   const response = await axios.get(`/movie/${movieId}/reviews`);
//   // console.log('fetchReviewsById response.data', response.data.results);
//   return response.data.results;
// };

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day');
  return data.results;
};

export const fetchMovies = async (query) => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query: query,
      include_adult: true,
      language: 'en-US',
    },
  });
  // console.log('fetchMovies', response.data);
  return data.results;
};

export const fetchMoviesById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`);
  console.log('fetchMoviesById data', data);
  return data;
};

export const fetchCastById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  // console.log('fetchCastById  response.data.cast', response.data.cast);
  return data.cast;
};

export const fetchReviewsById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  // console.log('fetchReviewsById response.data', response.data.results);
  return data.results;
};
