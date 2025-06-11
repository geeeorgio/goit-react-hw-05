import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../service/tmdbAPI";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import Notification from "../../components/Notification/Notification";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const moviesList = await getTrendingMovies();
        setMovies(moviesList);
      } catch (error) {
        setErrorMsg(error.message);
        setErr(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Section>
      <Container>
        <h1 className={s.title}>Trending today</h1>
        {isLoading && <Loader />}
        {!err && !isLoading && movies.length > 0 && (
          <MovieList movies={movies} />
        )}
        {err && <Notification msg={errorMsg} />}
      </Container>
    </Section>
  );
};

export default HomePage;
