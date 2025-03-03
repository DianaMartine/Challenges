import React from 'react';
import './Header.css';
import logo from '../../../assets/icons/logo.svg';

const Header = () => (
  <header className="Header">
    <img src={logo} className="Header-logo" alt="logo" />
  </header>
);

export default Header;