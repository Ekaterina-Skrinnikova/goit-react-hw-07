import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      {isLoading && <p>Loading message</p>}
      {isError && <p>Error message</p>}

      <ContactList />
    </>
  );
}
