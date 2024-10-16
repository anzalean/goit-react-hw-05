import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <h1>Page not found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFoundPage;
