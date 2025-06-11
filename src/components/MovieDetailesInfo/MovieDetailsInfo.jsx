import s from "./MovieDetailsInfo.module.css";

const MovieDetailsInfo = ({
  movie: {
    adult,
    poster_path,
    budget,
    genres,
    homepage,
    runtime,
    vote_count,
    imdb_id,
    overview,
    release_date,
    title,
    vote_average,
  },
}) => {
  const movieBaseUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "w500";
  const posterUrl = poster_path
    ? `${movieBaseUrl}${posterSize}${poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Poster";

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatBudget = (budget) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(budget);
  };

  return (
    <div className={s.container}>
      <img src={posterUrl} alt={title} className={s.poster} loading="lazy" />
      <div className={s.content}>
        <h1 className={s.title}>{title}</h1>

        <div className={s.rating}>
          <span className={s.ratingValue}>★ {vote_average}</span>
          <span className={s.infoText}>({vote_count} votes)</span>
        </div>

        <div className={s.infoSection}>
          <h2 className={s.infoTitle}>Release Date</h2>
          <p className={s.infoText}>{formatDate(release_date)}</p>
        </div>

        {budget > 0 && (
          <div className={s.infoSection}>
            <h2 className={s.infoTitle}>Budget</h2>
            <p className={s.infoText}>{formatBudget(budget)}</p>
          </div>
        )}

        {genres && genres.length > 0 && (
          <div className={s.infoSection}>
            <h2 className={s.infoTitle}>Genres</h2>
            <div className={s.genres}>
              {genres.map((genre) => (
                <span key={genre.id} className={s.genre}>
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {overview && (
          <div className={s.infoSection}>
            <h2 className={s.infoTitle}>Overview</h2>
            <p className={s.overview}>{overview}</p>
          </div>
        )}

        <div className={s.links}>
          {homepage && (
            <a
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              className={s.link}
            >
              Official Website
            </a>
          )}
          {imdb_id && (
            <a
              href={`https://www.imdb.com/title/${imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={s.link}
            >
              View on IMDB
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsInfo;
