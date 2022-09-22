import React from 'react';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <p>I will typically respond on the same day.</p>
      <button
        className={styles.btn}
        onClick={() =>
          navigator.clipboard.writeText('alexchristopherrichards@gmail.com')
        }
      >
        alexchristopherrichards@gmail.com
      </button>
      <h1 className={styles.or}>Or</h1>
      <div className={styles.links}>
        <button className={styles.btn}>
          <a
            href="https://www.linkedin.com/in/acrichards3/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Message me on LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
}
