import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  Link,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import * as fetchMovies from '../../api';

const MoviesCast = lazy(() => import('../Cast/Cast.js'));
const MoviesReview = lazy(() => import('../Review/Review.js'));

export default function MovieDetailsView() {
  const history = useHistory();
  const location = useLocation();

  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    fetchMovies.fetcMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  const onClickBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <div>
      <button onClick={onClickBack} aria-label="Go back">
        <span>Back</span>
      </button>

      <div>
        <h1>Movie {movieId}</h1>

        {movie && (
          <>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div>
              <h2>{movie.title}</h2>
              <p>User Score {movie.popularity}%</p>
              <p>Overview</p>
              <p>{movie.overview}</p>
              {movie.genres.length > 0 && (
                <>
                  <p>Genres</p>
                  <ul>
                    {movie.genres.map(item => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </>
        )}
      </div>
      <div>
        <p>Aditional information</p>
        <p>
          <Link
            to={{
              pathname: `${url}/cast`,
              state: {
                from: location.state ? location.state.from : '/',
              },
            }}
          >
            Cast
          </Link>
        </p>
        <p className="reviews-link">
          <Link
            to={{
              pathname: `${url}/reviews`,
              state: {
                from: location.state ? location.state.from : '/',
              },
            }}
          >
            Reviews
          </Link>
        </p>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/movies/:moviesId/cast">
            <MoviesCast />
          </Route>

          <Route path="/movies/:moviesId/reviews">
            <MoviesReview />
          </Route>
        </Suspense>
      </div>
    </div>
  );
}
