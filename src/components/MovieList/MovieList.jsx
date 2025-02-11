import s from './MovieList.module.css';
import Container from '../Container/Container';
import { Link, useLocation } from 'react-router-dom';
import { FcFilm } from 'react-icons/fc';

export default function MovieList({ movies }) {
  // Передаёт текущий location (адрес url) в state каждой ссылки.
  // useLocation() хук, который даёт информацию о текущем URL
  const location = useLocation();

  return (
    <section className={s.movieList_section}>
      <Container className={s.movieList_container}>
        <ul className={s.movieList_list}>
          {movies.map((item) => (
            <li className={s.movieList_item} key={item.id}>
              <Link
                to={`/movies/${item.id}`}
                className={s.movieList_link}
                state={location}
              >
                <FcFilm aria-hidden="true" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
