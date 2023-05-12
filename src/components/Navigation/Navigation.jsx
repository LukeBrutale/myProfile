import React from 'react';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="/">Profile</a>
        </li>
        <li className={s.item}>
          <a href="/">Messages</a>
        </li>
        <li className={s.item}>
          <a href="/">News</a>
        </li>
        <li className={s.item}>
          <a href="/">Music</a>
        </li>
        <li className={s.item}>
          <a href="/">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
