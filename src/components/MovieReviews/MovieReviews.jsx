import Container from '../Container/Container';
import s from './MovieReviews.module.css';
import { FcManager, FcViewDetails } from 'react-icons/fc';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as dataMovies from '../../services/api.js';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import Loader from '../Loader/Loader.jsx';

export default function MovieReviews() {
  const { movieId } = useParams();

  const [movieReviews, setmovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const results = await dataMovies.fetchReviewsById(movieId);

        // setmovieReviews(results);
        setmovieReviews(Array.isArray(results) ? results : []);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  if (isError) return <ErrorMessage />;
  if (isLoading) return <Loader />;

  return (
    <section className={s.movieReviews_section}>
      <Container className={s.movieReviews_container}>
        {/* {isError && <ErrorMessage />}
        {isLoading && <Loader />} */}
        {movieReviews.length > 0 ? (
          <ul className={s.movieReviews_list}>
            {movieReviews.map((item) => (
              <li className={s.movieReviews_item} key={item.id}>
                <dl className={s.movieReviews_description_list}>
                  <div className={s.movieReviews_description_wrapper}>
                    <dt className={s.movieReviews_definition_term}>
                      <FcManager
                        className={s.movieReviews_icon}
                        aria-hidden="true"
                      />
                      Author
                    </dt>
                    <dd className={s.movieReviews_definition_description}>
                      {item.author ?? 'No data available'}
                    </dd>
                  </div>
                  <div className={s.movieReviews_description_wrapper}>
                    <dt className={s.movieReviews_definition_term}>
                      <FcViewDetails
                        className={s.movieReviews_icon}
                        aria-hidden="true"
                      />
                      Review
                    </dt>
                    <dd className={s.movieReviews_definition_description}>
                      {item.content ?? 'No data available'}
                    </dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        ) : (
          <p className={s.movieReviews_noReviews}>
            We don’t have any reviews for this movie..
          </p>
        )}
      </Container>
    </section>
  );
}
