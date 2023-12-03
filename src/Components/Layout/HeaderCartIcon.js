import React from 'react';
import CartIcon from '../Cart/CartIcon';
import './HeaderCartButton.css';

const HeaderCartIcon = (props) => {
    return (
        <button className='button' onClick={props.onClick}>
            <span className='icon'>
                <CartIcon />
            </span>
            <span>My Cart</span>
            <span className='badge'>3</span>
        </button>
    );
};

export default HeaderCartIcon;