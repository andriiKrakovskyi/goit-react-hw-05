import s from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';
import { FcFilm } from 'react-icons/fc';

export default function MovieList({ trendingMovies }) {
  const location = useLocation();
  console.log('movieList-location', location);

  return (
    <div className={s.movieList_wrapper}>
      <ul className={s.movieList_list}>
        {trendingMovies.map((item) => (
          <li className={s.movieList_item} key={item.id}>
            <FcFilm className={s.movieList_icon} />

            <Link
              to={`/movies/${item.id}`}
              className={s.movieList_link}
              state={location}
            >
              <p className={s.movieList_title}>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
