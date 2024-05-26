import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import contacts from "../../contacts.json";
import { useEffect, useState } from "react";
import css from "./App.module.css";

export default function App() {
  const [contact, setContact] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [...contacts];
  });
  const [filter, setFilter] = useState("");

  const handleDeleteId = (contactId) => {
    setContact((prevContact) => {
      return prevContact.filter((contact) => {
        return contact.id !== contactId;
      });
    });
  };

  const filteredContacts = contact.filter((item) => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });

  const addContacts = (newContact) => {
    setContact((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact));
  });

  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContacts} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={filteredContacts} onDelete={handleDeleteId} />
      </div>
    </>
  );
}
