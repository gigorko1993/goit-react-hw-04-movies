import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Navigation = lazy(() => import('./Components/Navigation'));
const HomePage = lazy(() => import('./Components/HomePage'));
const NotFoundPage = lazy(() => import('./Components/Page404'));
const MoviesPage = lazy(() => import('./Components/MoviesPage'));
const MovieDetailPage = lazy(() => import('./Components/MovieDetail'));

const loader = (
  <Loader
    type="Circles"
    color="rgba(200, 100, 25, 0.7)"
    height={80}
    width={80}
  />
);

export default function App() {
  return (
    <>
      <Suspense fallback={loader}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
