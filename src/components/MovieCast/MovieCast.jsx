import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../service/tmdbAPI";
import Loader from "../Loader/Loader";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const castData = await getMovieCast(movieId);
        setCast(castData);
      } catch (error) {
        setError(error.message || "Failed to load cast.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  useEffect(() => {
    if (!isLoading && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLoading]);

  if (isLoading) return <Loader />;
  if (error) return <div className={s.error}>{error}</div>;
  if (!cast.length)
    return <div className={s.noCast}>No cast information available</div>;

  return (
    <div className={s.castContainer} ref={sectionRef}>
      <h2 className={s.title}>Movie Cast</h2>
      <ul className={s.castList}>
        {cast.map((actor) => (
          <li key={actor.id} className={s.castItem}>
            <div className={s.actorCard}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                  className={s.actorImage}
                  loading="lazy"
                />
              ) : (
                <div className={s.noImage}>No photo</div>
              )}
              <div className={s.actorInfo}>
                <h3 className={s.actorName}>{actor.name}</h3>
                <p className={s.characterName}>{actor.character}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
