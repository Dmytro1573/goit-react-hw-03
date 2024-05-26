import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      <div>
        <ul className={css.contactList}>
          {contacts.map((contact) => {
            return (
              <li key={contact.id} className={css.contactItem}>
                <Contact contacts={contact} onDelete={onDelete} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
