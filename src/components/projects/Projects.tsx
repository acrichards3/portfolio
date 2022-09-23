import React from 'react';
import ProjectCard from './ProjectCard';
import styles from "./Projects.module.scss";
import { db } from '../../firebase';
import {collection, getDocs} from 'firebase/firestore';

export default function Projects() {
    const getProjects = async (db: any) => {
        const projectCol = collection(db, 'project');
        const projectDocs = await getDocs(projectCol);
        const projectList = projectDocs.docs.map((doc) => doc.data());
        return projectList;
    }

    console.log(getProjects(db));

  return (
    <div className={styles.container}><ProjectCard /></div>
  )
}
