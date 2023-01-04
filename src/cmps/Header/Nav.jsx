import React from 'react';
import { NavLink } from 'react-router-dom';
export const Nav = ({ open, toggleOpen }) => {
  return (
    <ul className={`right-nav ${open ? 'open' : ''}`}>
      <NavLink onClick={toggleOpen} exact to='/'>
        Home
      </NavLink>

      <NavLink onClick={toggleOpen} to='/timeline'>
        Tasks
      </NavLink>
    </ul>
  );
};
