import React, { Fragment } from 'react';
import './Header.css';
import HeaderNav from './HeaderNav'; 
import CompanyName from './CompanyName';
import HeaderCartIcon from './HeaderCartIcon';

const Header = () => {
  return (
    <Fragment>
        <header className="header">
            <HeaderNav />
            <HeaderCartIcon />
        </header>
        <header>
            <CompanyName />
        </header>
    </Fragment>
  );
};

export default Header;
