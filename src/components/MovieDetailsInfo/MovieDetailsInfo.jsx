import { Star } from "lucide-react";
import s from "./MovieDetailsInfo.module.css";

const MovieDetailsInfo = ({
  movie: {
    adult,
    budget,
    genres,
    homepage,
    imdb_id,
    original_title,
    overview,
    poster_path,
    production_companies,
    release_date,
    revenue,
    runtime,
    tagline,
    title,
    vote_average,
    vote_count,
  },
}) => {
  const movieBaseUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "w500";
  const posterUrl = `${movieBaseUrl}${posterSize}${poster_path}`;

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

  const formatRuntime = (minutes) => {
    if (!minutes || minutes <= 0) return "—";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const getRatingBadge = () => {
    if (adult) {
      return <div className={`${s.ratingBadge} ${s.adult}`}>18+</div>;
    }
    return <div className={`${s.ratingBadge} ${s.general}`}>G</div>;
  };

  return (
    <div className={s.container}>
      <div className={s.posterWrapper}>
        <img src={posterUrl} alt={title} className={s.poster} loading="lazy" />
        {getRatingBadge()}
      </div>

      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>{title}</h1>
          {tagline && <p className={s.tagline}>{tagline}</p>}
          <div className={s.rating}>
            <Star className={s.starIcon} />
            <span className={s.ratingValue}>
              {vote_average && vote_average.toFixed(1)}
            </span>
            <span className={s.infoText}>({vote_count} votes)</span>
          </div>
        </div>

        <div className={s.metaInfo}>
          <div className={s.metaItem}>
            <span className={s.metaLabel}>Release Date:</span>
            <span className={s.metaValue}>
              {release_date ? formatDate(release_date) : "—"}
            </span>
          </div>

          {runtime > 0 && (
            <div className={s.metaItem}>
              <span className={s.metaLabel}>Runtime:</span>
              <span className={s.metaValue}>{formatRuntime(runtime)}</span>
            </div>
          )}

          {budget > 0 && (
            <div className={s.metaItem}>
              <span className={s.metaLabel}>Budget:</span>
              <span className={s.metaValue}>{formatBudget(budget)}</span>
            </div>
          )}

          {revenue > 0 && (
            <div className={s.metaItem}>
              <span className={s.metaLabel}>Revenue:</span>
              <span className={s.metaValue}>{formatBudget(revenue)}</span>
            </div>
          )}

          {original_title !== title && (
            <div className={s.metaItem}>
              <span className={s.metaLabel}>Original Title:</span>
              <span className={s.metaValue}>{original_title}</span>
            </div>
          )}
        </div>

        {genres && genres.length > 0 && (
          <div className={s.genres}>
            {genres.map((genre) => (
              <span key={genre.id} className={s.genre}>
                {genre.name}
              </span>
            ))}
          </div>
        )}

        {overview && (
          <div className={s.overviewSection}>
            <h3 className={s.sectionTitle}>Overview</h3>
            <p className={s.overview}>{overview}</p>
          </div>
        )}

        {production_companies && production_companies.length > 0 && (
          <div className={s.companiesSection}>
            <h2 className={s.sectionTitle}>Production Companies</h2>
            <div className={s.companies}>
              {production_companies.map((company) => (
                <span key={company.id} className={s.company}>
                  {company.name}
                </span>
              ))}
            </div>
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
