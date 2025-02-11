import s from './HomePage.module.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import MovieList from '../../components/MovieList/MovieList.jsx';
import { useState, useEffect } from 'react';
import * as dataMovies from '../../services/api.js';

export default function HomePage() {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await dataMovies.fetchTrendingMovies();

        // setTrending(data);
        setTrending(Array.isArray(data) ? data : []);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h2 className={s.homePage_title}>Trending today</h2>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <MovieList movies={trending} />
    </>
  );
}
