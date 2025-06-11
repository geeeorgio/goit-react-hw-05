import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({ movies }) => {
  return (
    <Container>
      <Grid>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Grid>
    </Container>
  );
};

export default MovieList;
