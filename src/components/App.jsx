import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchContacts } from 'redux/operations.contacts';
import Header from './header/Header';
import Contacts from './pages/contacts/Contacts';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';

// import { ContactForm } from './contact-form/ContactForm';
// import { Filter } from './filter/Filter';
// import { ContactList } from './contact-list/ContactList';

// import s from './app.module.css';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
};
