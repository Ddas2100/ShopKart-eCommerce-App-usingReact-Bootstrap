import React from 'react';
import './HeaderNav.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import HeaderCartIcon from './HeaderCartIcon';

const HeaderNav = () => {
    return (
        <>
            <Navbar bg='dark' expand='lg' variant='dark'>
                <Container className='first-navbar'>
                    <Navbar.Brand href='/'>ShopKart</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mx-auto'>
                            <Nav.Link href='/home'>HOME</Nav.Link>
                            <Nav.Link href='/store'>STORE</Nav.Link>
                            <Nav.Link href='/about'>ABOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <HeaderCartIcon />
                </Container>
            </Navbar>

            <Navbar bg='light' variant='light' className='second-navbar'>
                <Container>
                    <Navbar.Brand className='mx-auto'>ShopKart</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default HeaderNav;