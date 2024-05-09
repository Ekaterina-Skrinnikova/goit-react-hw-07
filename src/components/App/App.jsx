import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Watch } from "react-loader-spinner";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contactsOps";
import css from "../App/App.module.css";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      {isLoading && (
        <Watch
          visible={true}
          height="50"
          width="50"
          radius="40"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {isError && <p className={css.error}>{isError}</p>}

      <ContactList />
    </div>
  );
}
