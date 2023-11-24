import React from 'react';
import CartIcon from '../Cart/CartIcon';
import { Button } from 'react-bootstrap';

const HeaderCartIcon = () => {
    return (
        <>
            <Button variant="outline-light">
                <CartIcon /> Cart <span>0</span>
            </Button>
        </>
    );
};

export default HeaderCartIcon;