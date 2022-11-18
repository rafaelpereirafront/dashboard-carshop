import React from 'react';
import Style from './style_module/Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../logo.svg';

const Header = () => {
  return (
    <header className={Style.header}>
      <nav className={`${Style.nav} contain`}>
        <Link to="/" aria-label="car - home">
          <Logo />
        </Link>
        <Link to="/login" className={Style.login}>
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
