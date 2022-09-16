import React from 'react';
import me from '../../images/me.jpg';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <img src={me} alt="Profile" className={styles.profilePic} />
      <h1 className={styles.title}>Hello, I'm Alex</h1>
    </div>
  );
}
