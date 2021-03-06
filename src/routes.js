import React from 'react';
import { Router } from '@reach/router';
import Loadable from 'react-loadable';

const Home = Loadable({
  loader: () => import('./containers/Home'),
  loading: () => 'Loading...',
});

const Book = Loadable({
  loader: () => import('./containers/Book'),
  loading: () => 'Loading...',
});

export default function Routes() {
  return (
    <Router>
      <Home path="/" />
      <Book path="/book/:isbn"/>
    </Router>
  );
}
