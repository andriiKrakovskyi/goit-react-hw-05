import MovieList from '../../components/MovieList/MovieList.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import Loader from '../../components/Loader/Loader';
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import * as dataMovies from '../../services/api.js';

export default function MoviesPage() {
  // const { movieId } = useParams();
  // console.log(movieId);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // if (!movieId) return;
    if (!query) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await dataMovies.fetchMovies(query);

        setMovies(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <SearchBar
        handleSubmit={handleSubmit}
        disabled={isLoading}
        query={query}
      />
      <MovieList movies={movies} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
    </>
  );
}
