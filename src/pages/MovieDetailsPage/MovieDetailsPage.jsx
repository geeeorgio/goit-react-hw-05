import { Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useState, Suspense, lazy, useRef } from "react";
import { getMovieById } from "../../service/tmdbAPI";
import Container from "../../components/Container/Container";
import Loader from "../../components/Loader/Loader";
import BackLink from "../../components/BackLink/BackLink";
const MovieDetailsInfo = lazy(() =>
  import("../../components/MovieDetailsInfo/MovieDetailsInfo")
);

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  const ref = useRef();

  const location = useLocation();

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
      <BackLink to={location.state || "/"} />
      <Suspense fallback={<Loader />}>
        <MovieDetailsInfo movie={movie} ref={ref} />
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetailsPage;
