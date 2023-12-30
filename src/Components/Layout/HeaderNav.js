import React from "react";
import './HeaderNav.css';
import { NavLink } from "react-router-dom";
import ShopKart_logo from '../../Assets/ShopKart_logo.png';

const HeaderNav = () => {
    return (
        <React.Fragment>
            <header>
                <img src={ShopKart_logo} alt="Logo" className="logo" />
                <NavLink to="/home" className="special-button">HOME</NavLink>
                <NavLink to="/store" className="special-button">STORE</NavLink>
                <NavLink to="/about-us" className="special-button">ABOUT US</NavLink>
                <NavLink to="/contact-us" className="special-button">CONTACT US</NavLink>
            </header>
        </React.Fragment>
    );
};

export default HeaderNav;
