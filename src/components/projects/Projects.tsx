import React, { useState, useEffect } from 'react';
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
    console.log(url);
    return url;
  };

  console.log(getProjects(db))

  function useAsyncLoadedData<T>(loader: () => Promise<T>) {
    const [data, setData] = useState<T>();
    useEffect(() => {
      loader().then(data => {
        setData(data);
      })
    }, [loader]);
    return { loading: data === undefined, data } as
      | { loading: true; data: undefined }
      | { loading: false; data: T };
  }

  const asyncProjects = useAsyncLoadedData(() => getProjects(db));
  
  return (
    <div className={styles.container}>
    {asyncProjects.loading ? (
      <div>Loading...</div>
    ) : (
      asyncProjects.data.map(project => {
        return (
          <Card
            elevation={2}
            interactive={true}
            className={styles.card}
            id={project.id}
          >
            <>
              <h1 className={styles.cardTitle}>{project.title}</h1>
              <h3 className={styles.cardDates}>{project.dates}</h3>
              <p className={styles.cardDesc}>{project.desc}</p>
              <h3 className={styles.cardSubtitle}>Technologies Used:</h3>
              <ul className={styles.cardTech}>
                {project.tech.map((item: string) => {
                  return <li>{item}</li>;
                })}
              </ul>
              <h2 className={styles.cardUrl}>Demo: {checkUrl(project.url)}</h2>
              <h2 className={styles.cardUrl}>
                View Repo: {checkUrl(project.code)}
              </h2>
            </>
          </Card>
        );
      })
    )}
    </div>
  )
}