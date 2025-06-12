import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../service/tmdbAPI";
import Loader from "../Loader/Loader";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
const sectionRef = useRef(null);

useEffect(() => {
  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      const reviewsData = await getMovieReviews(movieId);
      setReviews(reviewsData);
    } catch (error) {
      setError(error.message || "Failed to load reviews.");
    } finally {
      setIsLoading(false);
    }
  };

  fetchReviews();
}, [movieId]);

useEffect(() => {
  if (!isLoading && sectionRef.current) {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [isLoading]);

  if (isLoading) return <Loader />;
  if (error) return <div className={s.error}>{error}</div>;
  if (!reviews.length)
    return <div className={s.noReviews}>No reviews available</div>;

  return (
    <div className={s.reviewsContainer} ref={sectionRef}>
      <h2 className={s.title}>Movie Reviews</h2>
      <ul className={s.reviewsList}>
        {reviews.map((review) => (
          <li key={review.id} className={s.reviewItem}>
            <div className={s.reviewCard}>
              <div className={s.reviewHeader}>
                <div className={s.authorInfo}>
                  <h3 className={s.authorName}>{review.author}</h3>
                  <p className={s.reviewDate}>
                    {new Date(review.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className={s.rating}>
                  <span className={s.ratingValue}>
                    {review.author_details?.rating
                      ? `${review.author_details.rating}/10`
                      : "No rating"}
                  </span>
                </div>
              </div>
              <div className={s.reviewContent}>
                <p className={s.reviewText}>{review.content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
