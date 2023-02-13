import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations.contacts';

import { ContactForm } from './contact-form/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contact-list/ContactList';

import s from './app.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const search = useSelector(state => state.filter.search);

  useEffect(() => {
    dispatch(fetchContacts(search));
  }, [dispatch, search]);
  if (error) return <p>error</p>;
  return (
    <>
      <h2 className={s.title}>Phonebook</h2>
      <ContactForm />
      <h2 className={s.title}>Contact</h2>
      <Filter />
      {isLoading ? <p>Loading...</p> : <ContactList contacts={items} />}
    </>
  );
};
