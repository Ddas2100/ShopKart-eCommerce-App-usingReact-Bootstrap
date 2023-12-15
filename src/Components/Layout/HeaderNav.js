// import React from 'react';
// import './HeaderNav.css';
// import { Nav, Navbar, Container } from 'react-bootstrap';

// const HeaderNav = (props) => {
//     return (
//         <>
//             <Navbar bg='dark' expand='lg' variant='dark'>
//                 <Container className='first-navbar'>
//                     <Navbar.Brand href='/'>ShopKart</Navbar.Brand>
                    
//                     <Navbar.Toggle aria-controls='basic-navbar-nav' />
//                     <Navbar.Collapse id='basic-navbar-nav'>
//                         <Nav className='mx-auto'>
//                             <Nav.Link href='/home'>HOME</Nav.Link>
//                             <Nav.Link href='/store'>STORE</Nav.Link>
//                             <Nav.Link href='/about'>ABOUT</Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </>
//     );
// };

// export default HeaderNav;

import React from "react";
import './HeaderNav.css';
// import { NavLink } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShopKart_logo from '../../Assets/ShopKart_logo.png';

const HeaderNav = () => {
    return (
        <React.Fragment>
            <div>
                <img src={ShopKart_logo} alt="Logo" className="logo" />
                <NavLink to="/home" className="badge">HOME</NavLink>
                <NavLink to="/store" className="badge">STORE</NavLink>
                <NavLink to="/about-us" className="badge">ABOUT US</NavLink>
            </div>
        </React.Fragment>
    );

};

export default HeaderNav;
