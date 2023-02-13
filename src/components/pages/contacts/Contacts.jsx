import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations.contacts';

import { ContactForm } from 'components/contact-form/ContactForm';
import { ContactList } from 'components/contact-list/ContactList';
import { Filter } from 'components/filter/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const search = useSelector(state => state.filter.search);

  useEffect(() => {
    dispatch(fetchContacts(search));
  }, [dispatch, search]);
  if (error) return <p>error</p>;
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contact</h2>
      <Filter />
      {isLoading ? <p>Loading...</p> : <ContactList contacts={items} />}
    </>
  );
};

export default Contacts;
