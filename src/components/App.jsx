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
  // eslint-disable-next-line
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
        <Route
          path="/login"
          element={!tokenValue ? <Login /> : <Navigate to="/contacts" />}
        />
        <Route
          path="/registration"
          element={!tokenValue ? <Registration /> : <Navigate to="/contacts" />}
        />
        <Route path="*" element={<Navigate to="/contacts" />} />
      </Routes>
    </>
  );
};
