import { useEffect, useState, useRef } from 'react';
import { useParams, Link, Routes, Route, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import styles from './MovieDetailsPage.module.css';
import { useNavigate } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const prevLocationRef = useRef(location.state?.from ?? '/movies'); 

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  const handleGoBack = () => {
    navigate(prevLocationRef.current); 
  };

  return (
    <div className={styles.container}>
      <button onClick={handleGoBack} className={styles.goBackButton}>Go back</button>
      <div className={styles.movieInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={styles.poster}
        />
        <div className={styles.details}>
          <h1>{movie.title}</h1>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>User Rating:</strong> {movie.vote_average} / 10</p>
          <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>

      <div className={styles.links}>
        <Link to="cast" state={{ from: location }}>Cast</Link>
        <Link to="reviews" state={{ from: location }}>Reviews</Link>
      </div>

      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
