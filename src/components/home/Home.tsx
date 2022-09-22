import React from 'react';
import me from '../../images/me.jpg';
import { SocialIcon } from 'react-social-icons';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <img src={me} alt="Profile" className={styles.profilePic} />
      <h1 className={styles.title}>Hello, I'm Alex</h1>
      <h2 className={styles.subtitle}>A Full Stack Web Developer</h2>
      <p className={styles.introBody}>
        Welcome to my portfolio website! Here you will find information on all
        of my past and current projects. I recently graduated from Nucamp's Full
        Stack Coding Bootcamp with honors. Some of the main technologies I use
        to create my projects are TypeScript, React, Redux, SASS Modules, and
        Firebase. I also have experience with NextJS, MongoDB, and React
        Bootstrap.
      </p>
      <p className={styles.introBody}>
        Welcome to my portfolio website! Here you will find information on all
        of my past and current projects. I recently graduated from Nucamp's Full
        Stack Coding Bootcamp with honors. Some of the main technologies I use
        to create my projects are TypeScript, React, Redux, SASS Modules, and
        Firebase. I also have experience with NextJS, MongoDB, and React
        Bootstrap.
      </p>
      <h2 className={styles.contact}>Get in touch</h2>
      <div className={styles.socialIcons}>
        <SocialIcon
          network="github"
          url="https://github.com/acrichards3"
          target="_blank"
          className={styles.icon}
        />
        <SocialIcon
          network="linkedin"
          url="https://www.linkedin.com/in/acrichards3/"
          target="_blank"
          className={styles.icon}
        />
        <SocialIcon
          network="email"
          url="mailto:alexchristopherrichards@gmail.com"
        />
      </div>
    </div>
  );
}
