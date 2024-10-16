import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import css from './App.module.css';
import clsx from 'clsx';
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation
          className={css.nav}
          activeClassName={css.active}
          buildLinkClass={buildLinkClass} />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      </div>
      </BrowserRouter>
  );
};

export default App;
