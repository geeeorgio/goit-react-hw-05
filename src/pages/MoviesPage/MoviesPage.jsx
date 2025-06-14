import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "../../service/tmdbAPI";
import toast from "react-hot-toast";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import Loader from "../../components/Loader/Loader";
import Notification from "../../components/Notification/Notification";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const moviesList = await getMoviesByQuery(query);
        if (moviesList.length === 0) {
          toast.error("No movies found for this query. Try something else.");
          setMovies([]);
          return;
        }
        setMovies(moviesList);
      } catch (error) {
        setErrorMsg(error.message);
        setErr(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchParams]);

  return (
    <Section>
      <Container>
        <SearchForm />
        {isLoading && <Loader />}
        {!err && !isLoading && movies.length > 0 && (
          <MovieList movies={movies} />
        )}
        {err && <Notification msg={errorMsg} />}
      </Container>
    </Section>
  );
};

export default MoviesPage;
