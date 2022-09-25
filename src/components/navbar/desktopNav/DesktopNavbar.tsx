import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from '../LINKS';
import styles from './DesktopNavbar.module.scss';

export default function DesktopNavbar() {
  const [active, setActive] = useState(0);

  const returnLinks = () => {
    return LINKS.map((link) => {
      return (
        <button className={ active === link.id ? styles.activeNavItem : styles.navItem} key={link.id}>
          <Link
            to={link.url}
            className={styles.link}
            key={link.id}
            style={{ textDecoration: 'none'}}
            onClick={() => setActive(link.id)}
          >
            {link.name}
          </Link>
        </button>
      );
    });
  };

  return <div className={styles.container}>{returnLinks()}</div>;
}
