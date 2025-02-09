import Container from '../Container/Container';
import s from './MovieCast.module.css';
import { FcManager } from 'react-icons/fc';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as dataMovies from '../../services/api.js';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import Loader from '../Loader/Loader.jsx';

const defaultImg =
  'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';

export default function MovieCast() {
  const { movieId } = useParams();

  const [movieCast, setmovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await dataMovies.fetchCastById(movieId);

        // setmovieCast(data);
        setmovieCast(Array.isArray(data) ? data : []);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  if (!movieCast) {
    return <Loader />;
  }

  // if (isError) return <ErrorMessage />;
  // if (isLoading) return <Loader />;

  return (
    <section className={s.movieCast_section}>
      <Container className={s.movieCast_container}>
        {isError && <ErrorMessage />}
        {isLoading && <Loader />}
        {movieCast.length > 0 ? (
          <ul className={s.movieCast_list}>
            {movieCast.map((item) => (
              <li className={s.movieCast_item} key={item.id}>
                <figure className={s.movieCast_figure}>
                  <img
                    className={s.movieCast_img}
                    src={
                      item.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                        : defaultImg
                    }
                    width={250}
                    alt={
                      item.name ? `${item.name} photo` : 'Default actor image'
                    }
                  />

                  <figcaption className={s.movieCast_figcaption}>
                    <div className={s.movieCast_wrapper_text}>
                      <strong className={s.movieCast_title}>
                        <FcManager
                          className={s.movieCast_icon}
                          aria-hidden="true"
                        />
                        Name:
                      </strong>
                      <em className={s.movieCast_text}>{item.name}</em>
                    </div>
                    <div className={s.movieCast_wrapper_text}>
                      <strong className={s.movieCast_title}>Character:</strong>
                      <em className={s.movieCast_text}>{item.character}</em>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <p className={s.movieCast_noCast}>
            We don’t have any reviews for this movie..
          </p>
        )}
      </Container>
    </section>
  );
}
