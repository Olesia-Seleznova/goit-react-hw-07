import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { changeFilter, selectFilteredContacts } from "./redux/filtersSlice";
import { fetchContacts } from "./redux/contactsOps";
import {
  selectContacts,
  selectIsLoading,
  selectIsError,
} from "./redux/contactsSlice";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (newFilter) => {
    dispatch(changeFilter(newFilter));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onSearch={handleFilterChange} />
      {isLoading && (
        <div className="loader">Please wait...Loading is in progress...</div>
      )}
      {isError && <div className="error">Error! Try again!</div>}
      {!isLoading && !isError && (
        <ContactList contactsData={filteredContacts} />
      )}
    </div>
  );
}
