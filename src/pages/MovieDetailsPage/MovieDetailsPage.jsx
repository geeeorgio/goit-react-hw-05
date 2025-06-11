import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../../service/tmdbAPI";
import Container from "../../components/Container/Container";
import MovieDetailsInfo from "../../components/MovieDetailsInfo/MovieDetailsInfo";
import BackLink from "../../components/BackLink/BackLink";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      const details = await getMovieById(movieId);
      setMovie(details);
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <Container>
      <BackLink />
      <MovieDetailsInfo movie={movie} />
    </Container>
  );
};

export default MovieDetailsPage;
