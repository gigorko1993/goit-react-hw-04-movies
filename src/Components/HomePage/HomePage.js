import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as fetchMovies from '../../api';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMovies.fetchTrendMovies().then(res => setMovies(res.results));
  }, []);

  return (
    <div className="container">
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title}
                {movie.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
