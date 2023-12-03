import React from 'react';
import Modal from '../UI/Modal';
import './Cart.css';
// import CartItem from './CartItem';

const cartElements = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }
  ];


const Cart = (props) => {

    const cartItems = (
        <ul className='cart-items'>
            {cartElements.map((item) => (
                <li key={item.title}>{item.title}</li>
            ))}
        </ul>
    );
    

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className="total">
                <span>Total Amount</span>
                <span>12.99</span> 
            </div>
            <div className="actions">
                <button className="button--alt" onClick={props.onClose}> Close </button>
                <button className="button">Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
