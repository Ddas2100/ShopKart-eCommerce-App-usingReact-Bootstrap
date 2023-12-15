import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/cart-context';
import './HeaderCartButton.css';

const HeaderCartIcon = (props) => {
    const cartCtx= useContext(CartContext);

    const numberOfCartItems= cartCtx.items.reduce((curNumber, item) => {
        return curNumber+item.amount; 
    }, 0)

    return (
        <button className='button bump' onClick={props.onClick}>
            <span className='icon'>
                <CartIcon />
            </span>
            <span>My Cart</span>
            <span className='badge'>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartIcon;