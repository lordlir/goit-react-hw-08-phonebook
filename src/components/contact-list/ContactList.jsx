import { ContactListItem } from 'components/contact-list-item/ContactListItem';
import { useSelector } from 'react-redux';
import { getFilterContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getFilterContacts);
  return (
    <ul className="list">
      {contacts?.map(contact => {
        return <ContactListItem key={contact.id} {...contact} />;
      })}
    </ul>
  );
};
