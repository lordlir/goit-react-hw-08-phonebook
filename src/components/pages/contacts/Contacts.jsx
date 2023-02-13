import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations.contacts';

import { ContactForm } from 'components/contact-form/ContactForm';
import { ContactList } from 'components/contact-list/ContactList';
import { Filter } from 'components/filter/Filter';
import UserMenu from 'components/user-menu/UserMenu';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.contacts);

  const isAuth = useSelector(state => state.auth.isAuth);
  useEffect(() => {
    if (isAuth) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isAuth]);
  if (error) return <p>error</p>;
  return (
    <>
      <h2>Phonebook</h2>
      <UserMenu />
      <ContactForm />
      <h2>Contact</h2>
      <Filter />
      {isLoading ? <p>Loading...</p> : <ContactList />}
    </>
  );
};

export default Contacts;
