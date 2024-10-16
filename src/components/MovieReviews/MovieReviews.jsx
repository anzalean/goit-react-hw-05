import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import styles from './MovieReviews.module.css';

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews);
    }, [movieId]);

    return (
        <ul className={styles.reviewList}>
            {reviews.map(review => (
                <li key={review.id} className={styles.reviewItem}>
                    <p><strong>{review.author}</strong>: {review.content}</p>
                </li>
            ))}
            {reviews.length === 0 && <p>No reviews found</p>}
        </ul>
    );
};

export default MovieReviews;
