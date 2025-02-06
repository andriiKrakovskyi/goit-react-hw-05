import s from './MoviesPage.module.css';
import Container from '../../components/Container/Container.jsx';
import toast from 'react-hot-toast';
import { FcSearch } from 'react-icons/fc';
// import MovieList from '../../components/MovieList/MovieList.jsx';

export default function MoviesPage({ onSubmit, disabled }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const input = form.elements.inputMoviesPage;
    const inputValue = input.value.trim();

    if (!inputValue) {
      toast.error('Please enter a search term');
      return;
    }

    onSubmit(inputValue);

    // const handleSubmit = (value) => {
    //   setSearchParams({ query: value });
    // };

    // const { movieId } = useParams();
    // useEffect(() => {
    //   if (!movieId) return;
    // }, [movieId]);
  };

  return (
    <section className={s.moviesPage_section}>
      <Container className={s.moviesPage_container}>
        <form className={s.moviesPage_form} onSubmit={handleSubmit}>
          <label>
            <span className="visually_hidden">Search for movies</span>
            <div className={s.inputWrapper}>
              <FcSearch className={s.moviesPage_form_icon} />
              <input
                className={s.moviesPage_form_input}
                name="inputMoviesPage"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search for movies"
                maxLength="20"
              />
            </div>
          </label>
          <button
            className={s.moviesPage_form_button}
            disabled={disabled}
            aria-label="Search movies"
            type="submit"
          >
            Search
          </button>
        </form>

        {/* <MovieList movies={movies} /> */}
      </Container>
    </section>
  );
}
