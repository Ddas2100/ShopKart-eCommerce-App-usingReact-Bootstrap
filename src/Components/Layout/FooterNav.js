import React from 'react';
import './FooterNav.css';
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