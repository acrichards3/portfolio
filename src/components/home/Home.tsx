import React from 'react';
import me from '../../images/me.jpg';
import { SocialIcon } from 'react-social-icons';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <img src={me} alt="Profile" className={styles.profilePic} />
      <h1 className={styles.title}>Hello, I'm Alex</h1>
      <div className={styles.socialIcons}>
        <SocialIcon network="github" url="https://github.com/acrichards3" className={styles.icon} />
        <SocialIcon network="linkedin" className={styles.icon} />
      </div>
    </div>
  );
}
