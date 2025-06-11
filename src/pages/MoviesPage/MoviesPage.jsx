import { useEffect, useState } from "react";
import { getMoviesByQuery } from "../../service/tmdbAPI";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import Loader from "../../components/Loader/Loader";
import Notification from "../../components/Notification/Notification";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (q) => {
    setQuery(q);
  };

  useEffect(() => {
    if (!query.trim) return;

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const moviesList = await getMoviesByQuery(query);
        setMovies(moviesList);
      } catch (error) {
        setErrorMsg(error.message);
        setErr(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
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
