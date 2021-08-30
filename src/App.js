import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Navigation from './Components/Navigation';

const loader = (
  <Loader
    type="ThreeDots"
    color="rgba(238, 137, 23, 0.874)"
    height={100}
    width={100}
  />
);

export default function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Suspense fallback={loader}>
          <Route exact path="/"></Route>
          <Redirect to="/" />
        </Suspense>
      </Switch>
    </>
  );
}
