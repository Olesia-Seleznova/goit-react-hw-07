import { useSelector } from "react-redux";
import Contact from "./Contact";
import { selectVisibleContacts } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div className={css.div}>
      <ul className={css.ul}>
        {contacts.map((contact) => (
          <li className={css.li} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
