import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Contact({ contacts: { name, number, id }, onDelete }) {
  return (
    <>
      <div className={css.contact}>
        <div className={css.contactField}>
          <IoPersonSharp />
          <p className={css.contactName}>{name}</p>
        </div>
        <div className={css.contactField}>
          <FaPhoneVolume />
          <p className={css.contactNumber}>{number}</p>
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            onDelete(id);
          }}
          className={css.deleteButton}
        >
          Delete
        </button>
      </div>
    </>
  );
}
