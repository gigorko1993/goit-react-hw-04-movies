import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as fetchMovies from '../../api';

import s from './Cast.module.css';

export default function MoviesCast() {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);

  const { moviesId } = useParams();

  useEffect(() => {
    fetchMovies.fetchMovieActors(moviesId).then(response => {
      if (response.cast.length === 0) {
        setError('We don`t have any cast for this movie.');
        return;
      }
      setActors(response.cast);
    });
  }, [moviesId]);

  return (
    <>
      <p>{error}</p>
      <ul className={s.castList}>
        {actors &&
          actors.map(actor => (
            <li key={actor.cast_id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <div>
                  <p className={s.thumb}>No Photo</p>
                </div>
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
