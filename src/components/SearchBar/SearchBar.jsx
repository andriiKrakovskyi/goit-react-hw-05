import s from './SearchBar.module.css';

import { FcSearch } from 'react-icons/fc';
import { Field, Form, Formik } from 'formik';
import Container from '../Container/Container';

export default function SearchBar({ handleSubmit, query, disabled }) {
  const onSubmit = (values) => {
    handleSubmit(values.query);
  };

  const initialValues = {
    query,
  };
  return (
    <section className={s.searchBar_section}>
      <Container className={s.searchBar_container}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className={s.searchBar_form}>
            <label>
              <span className="visually_hidden">Search for movies</span>

              <div className={s.searchBar_inputWrapper}>
                <FcSearch
                  className={s.searchBar_form_icon}
                  aria-hidden="true"
                />
                <Field
                  className={s.searchBar_form_input}
                  name="query"
                  type="text"
                  placeholder="Search for movies"
                />
              </div>
            </label>

            <button
              className={s.searchBar_form_button}
              disabled={disabled}
              aria-label="Search movies"
              type="submit"
            >
              Search
            </button>
          </Form>
        </Formik>
      </Container>
    </section>
  );
}
