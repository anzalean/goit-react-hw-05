import { Link } from 'react-router-dom';
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
    return (
        
        <ul className={styles.movieList}>
            {movies.map(movie => (
                <li key={movie.id} className={styles.movieItem}>
                    <Link to={`/movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                </li>
            ))}
            
        </ul>
    );
};

export default MovieList;
