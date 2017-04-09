import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => (
  <header>
    <img src={logo} className="redux-logo" alt="logo" />
    <h2>Welcome to Shortly</h2>
  </header>
);

export default Header;
