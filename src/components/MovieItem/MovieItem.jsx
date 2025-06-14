import { Link, useLocation } from "react-router-dom";
import GridItem from "../GridItem/GridItem";
import s from "./MovieItem.module.css";

const MovieItem = ({ movie }) => {
  const location = useLocation();

  return (
    <Link to={`/movies/${movie.id}`} state={location}>
      <GridItem>
        <p className={s.title}>{movie.title}</p>
      </GridItem>
    </Link>
  );
};

export default MovieItem;
