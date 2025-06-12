import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState, Suspense } from "react";
import { getMovieById } from "../../service/tmdbAPI";
import Container from "../../components/Container/Container";
import MovieDetailsInfo from "../../components/MovieDetailsInfo/MovieDetailsInfo";
import BackLink from "../../components/BackLink/BackLink";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      try {
        const details = await getMovieById(movieId);
        setMovie(details);
      } catch (error) {
        console.error("Failed to fetch movie:", error);
      } finally {
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <Container>
      <BackLink />
      {loading ? <Loader /> : <MovieDetailsInfo movie={movie} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetailsPage;
