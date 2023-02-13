import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/slice.filter';
import s from './filter.module.css';

export const Filter = () => {
  const input = useSelector(state => state.filter.search);
  const dispatch = useDispatch();

  const handlChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label className={s.label} htmlFor="filter">
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={input}
        onChange={handlChange}
      />
    </label>
  );
};
