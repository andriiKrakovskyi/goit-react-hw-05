import s from './Navigation.module.css';

import { NavLink } from 'react-router-dom';
// import { Navigate, useState } from 'react-router-dom';
import clsx from 'clsx';
import { FcHome, FcFilmReel } from 'react-icons/fc';
const buildLinkClass = ({ isActive }) => {
  return clsx(s.navigation_link, isActive && s.navigation_active);
};

export default function Navigation() {
  return (
    <header className={s.navigation_header}>
      <nav className={s.navigation_nav}>
        <NavLink to="/" className={buildLinkClass} aria-label="Go to Home">
          <FcHome aria-hidden="true" />
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className={buildLinkClass}
          aria-label="Go to Movies"
        >
          <FcFilmReel aria-hidden="true" />
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
