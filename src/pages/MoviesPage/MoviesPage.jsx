import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    // Get the query parameter from the URL
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const searchQuery = params.get('query') || '';
        if (searchQuery) {
            setQuery(searchQuery);
            handleSearch(searchQuery);
        }
    }, [location.search]); // Run when the search query changes in the URL

    const handleSearch = async (searchQuery) => {
        const fetchedMovies = await fetchMovies(searchQuery);
        setMovies(fetchedMovies);
        // Update the URL with the search query
        navigate(`?query=${searchQuery}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(query);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a movie"
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>Search</button>
            </form>

            {movies.length > 0 ? <MovieList movies={movies} /> : <p>No movies found</p>}
        </div>
    );
};

export default MoviesPage;
