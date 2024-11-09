import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactSlice";

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {visibleContacts.map((contact) => (
          <li className={styles.item} key={contact.id}>
            <Contact
              data={contact}
              onDelete={() => handleDeleteContact(contact.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
