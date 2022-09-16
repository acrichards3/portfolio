import React, { useState } from 'react';
import { Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { LINKS } from '../LINKS';
import styles from './MobileNavbar.module.scss';

export default function MobileNavbar() {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = (open: boolean) => {
    if (open) {
      return (
        <div className={styles.menuOpen}>
          <div>
            <button onClick={() => setIsOpen(false)} className={styles.menuBtn}>
              <Icon icon="menu-open" size={100} />
            </button>
          </div>
        </div>
      );
    }

    return (
      <button onClick={() => setIsOpen(true)} className={styles.menuBtn}>
        <Icon icon="menu" size={100} />
      </button>
    );
  };

  const currentlyOpen = (open: boolean) => {
    if (open) {
      return (
        <div className={styles.menuOpen}>
          {LINKS.map((link) => {
            return (
              <div>
                <Link
                  to={link.url}
                  key={link.id}
                  style={{ textDecoration: 'none' }}
                  className={
                    active === link.id ? styles.activeNavItem : styles.navItem
                  }
                  onClick={() => setActive(link.id)}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>{menuOpen(isOpen)}</div>
      <div>{currentlyOpen(isOpen)}</div>
    </div>
  );
}
