import s from './NotFoundPage.module.css';
import Container from '../../components/Container/Container.jsx';
import { Link } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';

export default function NotFoundPage() {
  return (
    <section className={s.notFoundPage_section}>
      <Container className={s.notFoundPage_container}>
        <div className={s.notFoundPage_wrapper}>
          <h2 className={s.notFoundPage_title}>
            Oops! The page you are looking for does not exist.
          </h2>
          <div className={s.notFoundPage_wrapper_home}>
            <FcHome className={s.notFoundPage_icon} />
            <Link to="/">Go to Home</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
