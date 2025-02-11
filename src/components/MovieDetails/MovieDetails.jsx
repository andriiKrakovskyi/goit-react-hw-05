import s from './MovieDetails.module.css';
import Container from '../Container/Container.jsx';
import * as dataMovies from '../../services/api.js';
import { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import Loader from '../Loader/Loader.jsx';
import { useParams } from 'react-router-dom';

const defaultImg =
  'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';

export default function MovieDetails() {
  const { movieId } = useParams();

  const [movieData, setMoviesId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await dataMovies.fetchMoviesById(movieId);
        setMoviesId(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  // Ране повернення, робимо коли  useState(null)
  //  при useState([]) рание повернення не робимов
  if (!movieData) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <section className={s.movieDetails_section}>
      <Container className={s.movieDetails_container}>
        {isError && <ErrorMessage />}
        {isLoading && <Loader />}
        <div className={s.movieDetails_wrapper}>
          <div className={s.movieDetails_img_wrapper}>
            <img
              className={s.movieDetails_img}
              src={
                movieData.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                  : defaultImg
              }
              width={350}
              alt="poster"
            />
          </div>

          <dl className={s.movieDetails_description_list}>
            <dt className={s.movieDetails_definition_term}>Title</dt>
            <dd className={s.movieDetails_definition_description}>
              {movieData.title ?? 'No data available'}
            </dd>

            <dt className={s.movieDetails_definition_term}>User Score</dt>
            <dd className={s.movieDetails_definition_description}>
              {movieData.popularity ?? 'No data available'} %
            </dd>

            <dt className={s.movieDetails_definition_term}>Overview</dt>
            <dd className={s.movieDetails_definition_description}>
              {movieData.overview ?? 'No data available'}
            </dd>

            <dt className={s.movieDetails_definition_term}>Genre</dt>
            <dd className={s.movieDetails_definition_description}>
              {movieData.genres
                ? movieData.genres.map((genre) => genre.name).join(', ')
                : 'N/A'}
            </dd>
          </dl>
        </div>
      </Container>
    </section>
  );
}
