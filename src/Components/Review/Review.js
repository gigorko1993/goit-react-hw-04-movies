import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as fetchMovies from '../../api';

export default function MoviesCast() {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  const { moviesId } = useParams();

  useEffect(() => {
    fetchMovies.fetchMovieReviews(moviesId).then(response => {
      if (response.results.length === 0) {
        setError(`There are no reviews for this movie`);
        return;
      }
      setReviews(response.results);
    });
  }, [moviesId]);

  return (
    <div>
      <p>{error}</p>
      <ul>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <p>Author {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
