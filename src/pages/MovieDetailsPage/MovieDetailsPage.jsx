import BackButton from '../../components/BackButton/BackButton';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieLinks from '../../components/MovieLinks/MovieLinks';

export default function MovieDetailsPage() {
  return (
    <div>
      <BackButton />
      <MovieDetails />
      <MovieLinks />
    </div>
  );
}
