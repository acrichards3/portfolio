import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from '../LINKS';
import styles from './DesktopNavbar.module.scss';

export default function DesktopNavbar() {
  const [active, setActive] = useState(0);

  const returnLinks = () => {
    return LINKS.map(link => {
      return (
        <Link
        to={link.url}
        className={styles.link}
        key={link.id}
        onClick={() => setActive(link.id)}
        >
        {link.name}
        </Link>
      );
    })
  }

  return (
    <div className={styles.navbar}>
      {returnLinks()}
    </div>
  )
}
