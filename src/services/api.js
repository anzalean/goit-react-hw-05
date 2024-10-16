import axios from 'axios';

const API_KEY = 'b5b84fd2d57ad5e713ab7c542656736a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.results;
};

export const fetchMovies = async (query) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  const response = await axios.get(url);
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchMovieCast = async (id) => {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.cast;
};

export const fetchMovieReviews = async (id) => {
  const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.results;
};
