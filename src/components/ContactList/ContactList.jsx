import { useSelector } from "react-redux";
import { selectFiltredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFiltredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((item) => (
        <li key={item.id}>
          <Contact contact={item} />
        </li>
      ))}
    </ul>
  );
}
