import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations.contacts';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContacts(id));
  };

  return (
    <li className="list-item">
      {name}:{phone}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
