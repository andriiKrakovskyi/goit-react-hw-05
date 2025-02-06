import s from './MovieDetailsPage.module.css';
import Container from '../../components/Container/Container.jsx';
import { useRef } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import clsx from 'clsx';
import { FcManager, FcViewDetails, FcUndo } from 'react-icons/fc';

export default function MovieDetailsPage() {
  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? '/movies');

  const buildLinkClass = ({ isActive }) => {
    return clsx(
      s.movieDetailsPage_nav_link,
      isActive && s.movieDetailsPage_active,
    );
  };

  return (
    <section className={s.movieDetailsPage_section}>
      <Container className={s.movieDetailsPage_container}>
        <Link to={goBackUrl.current} className={s.movieDetailsPage_link}>
          <FcUndo className={s.movieDetailsPage_icon} />
          <span className={s.movieDetailsPage_text}>Go back</span>
        </Link>

        <h2 className={s.movieDetailsPage_title}>Additional information</h2>

        <nav className={s.movieDetailsPage_nav}>
          <NavLink
            to="cast"
            className={buildLinkClass}
            aria-label="Go to movie cast"
          >
            <FcManager className={s.movieDetailsPage_icon} />
            <span className={s.movieDetailsPage_span}>Cast</span>
          </NavLink>

          <NavLink
            to="reviews"
            className={buildLinkClass}
            aria-label="Go to movie reviews"
          >
            <FcViewDetails className={s.movieDetailsPage_icon} />
            <span className={s.movieDetailsPage_span}>Reviews</span>
          </NavLink>
        </nav>

        <section className={s.movieDetailsPage_outlet}>
          <Outlet />
        </section>
      </Container>
    </section>
  );
}
