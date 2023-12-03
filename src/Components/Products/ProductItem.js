// ProductItem.js
import React from 'react';
import ProductItemForm from './ProductItemForm';
import './ProductItem.css';

const ProductItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <div className='product'>
      <h3>{props.title}</h3>
      <div className="zoom-effect">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="price">{price}</div>
      <ProductItemForm id={props.id} />
    </div>
  );
};

export default ProductItem;
