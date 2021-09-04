import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Navigation from './Components/Navigation';

const HomePage = lazy(() => {
  import('./Components/HomePage' /* webpackChunkName: "HomePage" */);
});
const NotFoundPage = lazy(() => {
  import('./Components/Page404' /* webpackChunkName: "PageNotFound" */);
});

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
      <Navigation />
      <Suspense fallback={loader}>
        <Switch>
          <Route exact path="/">
            <HomePage loader={loader} />
          </Route>
          <Route exact path="/movies">
            <div>movies</div>
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
