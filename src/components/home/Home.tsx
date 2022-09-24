import React from 'react';
import me from '../../images/me.jpg';
import { SocialIcon } from 'react-social-icons';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <img src={me} alt="Profile" className={styles.profilePic} />
        <h1 className={styles.title}>Hello, I'm Alex</h1>
      </div>
      <div className={styles.row}>
        <h2 className={styles.subtitle}>A Full Stack Web Developer</h2>
      </div>
      <div className={styles.row}>
        <div className={styles.body}>
          <p className={styles.introBody}>
            Welcome to my portfolio website! Here you will find information on
            all of my past and current projects. I recently graduated from
            Nucamp's Full Stack Coding Bootcamp with honors. While I was there,
            I learned about React, Bootstrap, MongoDB, and React Native. While
            these technologies are indeed useful, I now have a much better grasp
            on web development and now use other things such as TypeScript,
            Redux, SASS Modules, and Firebase along with React to build out my
            projects. As for this website, head over to the projects page to
            view all of my major projects, some of them have live demos for you
            to view. If you are looking to contact me, I can be reached via
            email or through my LinkedIn which I have linked below. Thanks for
            taking time to look at my projects!
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <h2 className={styles.contact}>Stay Connected</h2>
      </div>
      <div className={styles.row}>
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
    </div>
  );
}
