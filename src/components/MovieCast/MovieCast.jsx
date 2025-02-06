import s from './MovieCast.module.css';
import { FcManager } from 'react-icons/fc';

export default function MovieCast() {
  // const { movieId } = useParams();
  // useEffect(() => {
  //   if (!movieId) return;
  // }, [movieId]);
  return (
    <div className={s.movieCast_wrapper}>
      <FcManager className={s.movieCast_icon} />
      <h2> MovieCast</h2>
    </div>
  );
}
