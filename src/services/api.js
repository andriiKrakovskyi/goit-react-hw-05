import axios from 'axios';
import.meta.env.VITE_API_KEY;
import.meta.env.VITE_API_READ_ACCESS_TOKEN;

// const apiKey = import.meta.env.VITE_API_KEY;
const apiReadAccessToken = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers = {
  common: {
    Authorization: `Bearer ${apiReadAccessToken}`,
  },
};

export const fetchTendingMovies = async () => {
  const response = await axios.get('/trending/movie/day');
  return response.data.results;
};

// ===================================================

// axios.defaults.baseURL = 'https://api.unsplash.com';

// axios.defaults.headers = {
//   common: { Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}` },
// };

// axios.defaults.params = {
//   orientation: 'landscape',
//   per_page: 30,
// };

// export const fetchPhotos = async (query, page) => {
//   const response = await axios.get(
//     `/search/photos?query=${query}&page=${page}`,
//   );

//   return response.data;
// };

// ===================================================
// axios.defaults.baseURL = 'https://dummyjson.com';

// export const fetchUsers = async () => {
//   const { data } = await axios.get('users?limit=200');
//   return data.users;
// };

// export const fetchUserById = async (userId) => {
//   const { data } = await axios.get(`users/${userId}`);
//   return data;
// };

// export const fetchPostsByUserId = async (userId) => {
//   const { data } = await axios.get(`/posts/user/${userId}`);
//   return data.posts;
// };
