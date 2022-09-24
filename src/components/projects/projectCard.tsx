import React from 'react';
import { Card } from '@blueprintjs/core';
import styles from './Projects.module.scss';

export const projectCard = (
  title: string,
  dates: string,
  desc: string,
  tech: string[],
  url: string,
  code: string,
  id: string
) => {
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

  return (
    <Card elevation={2} interactive={true} className={styles.card} id={id}>
      <>
        <h1 className={styles.cardTitle}>{title}</h1>
        <h3 className={styles.cardDates}>{dates}</h3>
        <p className={styles.cardDesc}>{desc}</p>
        <h3 className={styles.cardSubtitle}>Technologies Used:</h3>
        <ul className={styles.cardTech}>
          {tech.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <h2 className={styles.cardUrl}>Demo: {checkUrl(url)}</h2>
        <h2 className={styles.cardUrl}>View Repo: {checkUrl(code)}</h2>
      </>
    </Card>
  );
};
