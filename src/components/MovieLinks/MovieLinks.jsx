import s from './MovieLinks.module.css';
import Container from '../Container/Container';
import clsx from 'clsx';
import { NavLink, Outlet } from 'react-router-dom';
import { FcManager, FcViewDetails } from 'react-icons/fc';
const buildLinkClass = ({ isActive }) => {
  return clsx(s.movieLinks_nav_link, isActive && s.movieLinks_active);
};

export default function MovieLinks() {
  return (
    <section className={s.movieLinks_section}>
      <Container className={s.movieLinks_container}>
        <div className={s.movieLinks_wrapper}>
          <h2 className={s.movieLinks_title}>Additional information</h2>
          <nav className={s.movieLinks_nav}>
            <NavLink
              to="cast"
              className={buildLinkClass}
              aria-label="Go to the movie cast section"
            >
              <FcManager aria-hidden="true" />
              Cast
            </NavLink>

            <NavLink
              to="reviews"
              className={buildLinkClass}
              aria-label="Go to the movie reviews section"
            >
              <FcViewDetails aria-hidden="true" />
              Reviews
            </NavLink>
          </nav>
        </div>

        <div className={s.movieLinks_qutlet}>
          <Outlet />
        </div>
      </Container>
    </section>
  );
}
