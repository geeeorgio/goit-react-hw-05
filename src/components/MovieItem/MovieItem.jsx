import { Link } from "react-router-dom";
import GridItem from "../GridItem/GridItem";
import s from "./MovieItem.module.css";

const MovieItem = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <GridItem>
        <p className={s.title}>{movie.title}</p>
      </GridItem>
    </Link>
  );
};

export default MovieItem;
