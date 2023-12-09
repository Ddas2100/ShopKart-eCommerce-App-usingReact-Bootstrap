// Button.js
import React, { useState } from 'react';

const Button = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [showQuantityBox, setShowQuantityBox] = useState(false);

  const increaseQuantityHandler = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    props.onAddToCart(newQuantity);
  };

  const decreaseQuantityHandler = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      props.onAddToCart(newQuantity);
    } else {
      setQuantity(1);
      setShowQuantityBox(false);
    }
  };

  const addToCartHandler = () => {
    setShowQuantityBox(true);
    props.onAddToCart(quantity);
  };

  return (
    <div className="button-container">
      {showQuantityBox ? (
        <div className="quantity-box">
          <button onClick={decreaseQuantityHandler}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantityHandler}>+</button>
        </div>
      ) : (
        <button onClick={addToCartHandler}>
          {quantity === 1 ? 'Add to Cart' : `Update Cart (${quantity})`}
        </button>
      )}
    </div>
  );
};

export default Button;
