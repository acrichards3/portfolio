import React from 'react';
import ProjectCard from './ProjectCard';
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <div className={styles.container}><ProjectCard /></div>
  )
}
