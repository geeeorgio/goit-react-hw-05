import axios from "axios";

const HEADER =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWQ4ZDM1YjcxNTIzNzk2MTgwZmUzMDBjMDRlOGI3ZiIsIm5iZiI6MTc0OTY0Mjk2OS45MDYsInN1YiI6IjY4NDk2ZWQ5NWNiMjdmYjgyMjM0MzRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4qMM3S1Kg4COgj7WvfGYRvq1B1UXq9ZMx5i-fF_-lEA";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
  const {
    data: { results },
  } = await axios.get(`${BASE_URL}/trending/movie/day?language=en-US`, {
    headers: {
      Authorization: HEADER,
    },
  });

  return results;
};

export const getMovieById = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization: HEADER,
      },
    }
  );

  return data;
};

export const getMoviesByQuery = async (query) => {
  const {
    data: { results },
  } = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&include_adult=true&language=en-US&page=1`,
    {
      headers: {
        Authorization: HEADER,
      },
    }
  );

  return results;
};

export const getMovieCast = async (movieId, page) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?language=en-US`,
    {
      headers: {
        Authorization: HEADER,
      },
      params: {
        page,
      },
    }
  );

  return data.cast;
};

export const getMovieReviews = async (movieId, page) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?language=en-US`,
    {
      headers: {
        Authorization: HEADER,
      },
      params: {
        page,
      },
    }
  );

  return data.results;
};
