import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/oper.auth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.user.email);

  return (
    <div>
      <p>{email}</p>
      <button
        onClick={() => {
          dispatch(logOutUser());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
