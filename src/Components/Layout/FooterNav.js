import React from 'react';
import './FooterNav.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterNav = () => {
    return (
        <>
            <Navbar bg='light' variant='light' className='footer-navbar'>
                <Container className='d-flex justify-content-between align-items-center'>
                    <div>
                        <Navbar.Brand>ShopKart</Navbar.Brand>
                        <h6 className='footer-text'>© All Rights Reserved 2023</h6>
                    </div>
                    <div>
                        <NavLink to="/" className="special-button2">HOME</NavLink>
                        <NavLink to="/about-us" className="special-button2">ABOUT US</NavLink>
                        <NavLink to="/store" className="special-button2">STORE</NavLink>
                        <NavLink to="/contact-us" className="special-button2">CONTACT US</NavLink>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="icon" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="icon" />
                        </a>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default FooterNav;