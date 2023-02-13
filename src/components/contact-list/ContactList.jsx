import { ContactListItem } from 'components/contact-list-item/ContactListItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul className="list">
      {contacts.map(contact => {
        return <ContactListItem key={contact.id} {...contact} />;
      })}
    </ul>
  );
};
