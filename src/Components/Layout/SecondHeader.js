import React from 'react';
import './SecondHeader.css';
import { Navbar, Container } from 'react-bootstrap';

const SecondHeader = (props) => {
    return (
        <>
            <Navbar bg='light' variant='light' className='second-navbar'>
                <Container>
                    <Navbar.Brand className='mx-auto'>ShopKart</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default SecondHeader;