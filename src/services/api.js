import axios from 'axios';
import.meta.env.VITE_API_KEY;
import.meta.env.VITE_API_READ_ACCESS_TOKEN;

// const apiKey = import.meta.env.VITE_API_KEY;
const apiReadAccessToken = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer ${apiReadAccessToken}`;

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
  return data.results;
};

export const fetchMoviesById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};

export const fetchCastById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const fetchReviewsById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};
