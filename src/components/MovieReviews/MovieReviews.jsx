import s from './MovieReviews.module.css';

import { FcViewDetails } from 'react-icons/fc';

export default function MovieReviews() {
  // const { movieId } = useParams();
  // useEffect(() => {
  //   if (!movieId) return;
  // }, [movieId]);
  return (
    <div className={s.movieReviews_wrapper}>
      <FcViewDetails className={s.movieReviews_icon} />
      <h2> MovieReviews</h2>
    </div>
  );
}
