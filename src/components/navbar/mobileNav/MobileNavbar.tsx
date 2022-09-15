import React, { useState } from 'react';
import { Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { LINKS } from '../LINKS';
import styles from './MobileNavbar.module.scss';

export default function MobileNavbar() {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    if (isOpen) {
        return (
          <div className={styles.menuOpen}>
            <div>
              <button
                onClick={() => setIsOpen(false)}
                className={styles.menuBtn}
              >
                <Icon icon="menu-closed" size={30} />
              </button>
            </div>
          </div>
        );
    }

    return (
      <button onClick={() => setIsOpen(true)} className={styles.menuBtn}>
        <Icon icon="menu" size={30} />
      </button>
    );
  }

  const returnLinks = () => {
    return LINKS.map((link) => {
      return (
        <button
          className={active === link.id ? styles.activeNavItem : styles.navItem}
        >
          <Link
            to={link.url}
            className={styles.link}
            key={link.id}
            style={{ textDecoration: 'none' }}
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
