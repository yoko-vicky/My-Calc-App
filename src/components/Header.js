import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Math Magicians</h1>
    <nav className="header__nav">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/calculator">Calculator</NavLink>
      <NavLink exact to="/quotes">Quotes</NavLink>
    </nav>
  </header>
);

export default Header;
