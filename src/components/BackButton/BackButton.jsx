import s from './BackButton.module.css';
import Container from '../../components/Container/Container.jsx';
import { useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FcUndo } from 'react-icons/fc';

export default function BackButton() {
  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? '/movies');

  return (
    <section className={s.backButton_section}>
      <Container className={s.backButton_container}>
        <Link to={goBackUrl.current} className={s.backButton_link}>
          <FcUndo className={s.backButton_icon} aria-hidden="true" />
          Go back
        </Link>
      </Container>
    </section>
  );
}
