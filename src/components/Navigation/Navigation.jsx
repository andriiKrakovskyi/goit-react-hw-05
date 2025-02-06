import s from './Navigation.module.css';
// import Container from '../../components/Container/Container.jsx';
import { NavLink, Outlet } from 'react-router-dom';
// import { Navigate, useState } from 'react-router-dom';
import clsx from 'clsx';
import { FcHome, FcFilmReel } from 'react-icons/fc';

export default function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.navigation_link, isActive && s.navigation_active);
  };

  return (
    <section className={s.navigation_section}>
      <div className={s.navigation_wrapper}>
        <nav className={s.navigation_nav}>
          <NavLink to="/" className={buildLinkClass} aria-label="Go to Home">
            <FcHome className={s.navigation_icon} />
            <span className={s.navigation_span}>Home</span>
          </NavLink>

          <NavLink
            to="/movies"
            className={buildLinkClass}
            aria-label="Go to Movies"
          >
            <FcFilmReel className={s.navigation_icon} />
            <span className={s.navigation_span}> Movies</span>
          </NavLink>
        </nav>
      </div>

      <section className={s.navigation_outlet}>
        <Outlet />
      </section>
    </section>
  );
}
