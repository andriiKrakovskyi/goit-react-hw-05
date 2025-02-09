import s from './SearchBar.module.css';
// import toast from 'react-hot-toast';
import { FcSearch } from 'react-icons/fc';
import { Field, Form, Formik } from 'formik';
import Container from '../Container/Container';
// export default function SearchBar({ onSubmit, disabled, query }) {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     const form = evt.target;
//     const input = form.elements.inputSearchBar;
//     const inputValue = input.value.trim();

//     if (!inputValue) {
//       toast.error('Please enter a search term');
//       return;
//     }

//     onSubmit(inputValue);

//     // const { movieId } = useParams();
//     // useEffect(() => {
//     //   if (!movieId) return;
//     // }, [movieId]);
//   };

//   return (
//     <form className={s.searchBar_form} onSubmit={handleSubmit}>
//       <label>
//         <span className="visually_hidden">Search for movies</span>
//         <div className={s.searchBar_inputWrapper}>
//           <FcSearch className={s.searchBar_form_icon} />
//           <input
//             className={s.searchBar_form_input}
//             name="inputSearchBar"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search for movies"
//             maxLength="20"
//           />
//         </div>
//       </label>
//       <button
//         className={s.searchBar_form_button}
//         disabled={disabled}
//         aria-label="Search movies"
//         type="submit"
//       >
//         Search
//       </button>
//     </form>
//   );
// }

export default function SearchBar({ handleSubmit, query, disabled }) {
  const onSubmit = (values) => {
    console.log(values);
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
