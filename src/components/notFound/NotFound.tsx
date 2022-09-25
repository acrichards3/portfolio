import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.body}>
        The page you are looking for could not be found.
      </p>
      <button className={styles.btn}>
        <Link to="/" style={{ textDecoration: 'none' }} className={styles.link}>
          {' '}
          Return Home?{' '}
        </Link>
      </button>
    </div>
  );
}
