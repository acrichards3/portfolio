import React from 'react';
import { projectCard } from './projectCard';
import { Card } from '@blueprintjs/core';
import { db } from '../../firebase';
import { collection, Firestore, getDocs } from 'firebase/firestore';
import styles from './Projects.module.scss';

export default function Projects() {
  const getProjects = async (db: Firestore) => {
    const projectCol = collection(db, 'project');
    const projectDocs = await getDocs(projectCol);
    const projectList = projectDocs.docs.map((doc) => doc.data());
    return projectList;
  };

  const checkUrl = (url: string) => {
    if (url.includes('.')) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={styles.cardLink}
        >
          {url}
        </a>
      );
    }
    return url;
  };

  const card = (
    <Card elevation={2} interactive={true} className={styles.card} id={'card'}>
        <h1 className={styles.cardTitle}>Title</h1>
        <h3 className={styles.cardDates}>December 2021 - Present</h3>
        <p className={styles.cardDesc}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <h3 className={styles.cardSubtitle}>Technologies Used:</h3>
        <ul className={styles.cardTech}>
          <li>React</li>
          <li>Redux</li>
          <li>TypeScript</li>
          <li>Firebase</li>
        </ul>
        <h2 className={styles.cardUrl}>Demo: {checkUrl('whatsGood.com')}</h2>
        <h2 className={styles.cardUrl}>View Repo: {checkUrl('N/A')}</h2>
    </Card>
  );

  return (
    <div className={styles.container}>
      {projectCard('Hello', 'Jan 2021 - Present', 'testing desc', ['firebase', 'JS', 'Redux'], 'igetsnobitches.com', 'N/A', 'thing')}
      {card}
      {card}
      {card}
      {card}
    </div>
  );
}
