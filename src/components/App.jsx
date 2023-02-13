import { token } from 'http';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getUser } from 'redux/user/operation.user';
import Contacts from './pages/contacts/Contacts';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';

export const App = () => {
  const dispatch = useDispatch();
  const tokenValue = useSelector(state => state.auth.token);
  const isAuth = useSelector(state => state.auth.isAuth);
  const { email, name } = useSelector(state => state.user);
  useEffect(() => {
    if (tokenValue && !isAuth) {
      dispatch(getUser());
    }
  }, [dispatch, isAuth, tokenValue]);
  return (
    <>
      <Routes>
        <Route
          path="/contacts"
          element={tokenValue ? <Contacts /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={!tokenValue ? <Login /> : <Contacts />} />
        <Route
          path="/registration"
          element={!tokenValue ? <Registration /> : <Contacts />}
        />
      </Routes>
    </>
  );
};
