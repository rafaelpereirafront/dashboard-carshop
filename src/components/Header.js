import React from 'react';
import Style from './style_module/Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as IconVendas } from '../vendas.svg';
import { ReactComponent as IconCars } from '../car.svg';
import { ReactComponent as IconVendor } from '../vendedor.svg';

const Header = () => {
  return (
    <header className={Style.header}>
      <nav className={`${Style.nav} contain`}>
        <div className={Style.wrapper}>
          <Link to="/" aria-label="home">
            <div className={Style.icon}>
              <IconVendas />
              <span>Vendas</span>
            </div>
          </Link>
          <Link to="/cars" aria-label="cars">
            <div className={Style.icon}>
              <IconCars />
              <span>Carros</span>
            </div>
          </Link>
          <Link to="/vendedor" aria-label="vendedores">
            <div className={Style.icon}>
              <IconVendor />
              <span>Vendedor</span>
            </div>
          </Link>
        </div>
        <Link to="/login" className={Style.login}>
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
