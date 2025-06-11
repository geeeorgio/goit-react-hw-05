import axios from "axios";

const HEADER =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWQ4ZDM1YjcxNTIzNzk2MTgwZmUzMDBjMDRlOGI3ZiIsIm5iZiI6MTc0OTY0Mjk2OS45MDYsInN1YiI6IjY4NDk2ZWQ5NWNiMjdmYjgyMjM0MzRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4qMM3S1Kg4COgj7WvfGYRvq1B1UXq9ZMx5i-fF_-lEA";
const API_KEY = "ded8d35b71523796180fe300c04e8b7f";

export const getTrendingMovies = async () => {
  const {
    data: { results },
  } = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    {
      headers: {
        Authorization: HEADER,
      },
      params: {
        api_key: API_KEY,
      },
    }
  );

  return results;
};

export const getMovieById = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization: HEADER,
      },
      params: {
        api_key: API_KEY,
      },
    }
  );

  return data;
};
