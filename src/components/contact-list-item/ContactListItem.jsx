import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations.contacts';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContacts(id));
  };

  return (
    <li className="list-item">
      {name}:{number}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
