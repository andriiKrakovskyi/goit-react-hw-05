import s from './HomePage.module.css';
import Container from '../../components/Container/Container.jsx';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import Loader from '../../components/Loader/Loader';

import { useLocation } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import * as dataMovies from '../../services/api.js';

export default function HomePage() {
  const location = useLocation();
  console.log('homePage-location', location);

  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const results = await dataMovies.fetchTendingMovies();

        setTrending(results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <section className={s.homePage_section}>
      <Container className={s.homePage_container}>
        <h2 className={s.homePage_title}>Trending today</h2>
        {isError && <ErrorMessage />}
        {isLoading && <Loader />}
        <MovieList trendingMovies={trending} />
      </Container>
    </section>
  );
}
