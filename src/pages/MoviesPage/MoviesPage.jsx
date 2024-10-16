import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get('query') || '';

    const handleSearch = async (searchQuery) => {
        const fetchedMovies = await fetchMovies(searchQuery);
        setMovies(fetchedMovies);
        setSearchParams({ query: searchQuery });
    };

    useEffect(() => {
        if (query) {
            handleSearch(query);
        }
    }, [query]);

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
                    onChange={(e) => setSearchParams({ query: e.target.value })}
                    placeholder="Search for a movie"
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>Search</button>
            </form>

            {movies.length > 0 ? <MovieList movies={movies} query={query} /> : <p>No movies found</p>}
        </div>
    );
};

export default MoviesPage;
