import React, { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
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
    <div className={styles.container}></div>
    )
}
