import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              //   className={({ isActive }) =>
              //     isActive ? s.nav_link_active : s.nav_link
              //   }
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              //   className={({ isActive }) =>
              //     isActive ? s.nav_link_active : s.nav_link
              //   }
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              //   className={({ isActive }) =>
              //     isActive ? s.nav_link_active : s.nav_link
              //   }
              to="/registration"
            >
              Registration
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
