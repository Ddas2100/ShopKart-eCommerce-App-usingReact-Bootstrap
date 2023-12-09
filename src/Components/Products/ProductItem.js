import { useContext } from 'react';
import ProductItemForm from './ProductItemForm';
import './ProductItem.css';
import CartContext from '../../Store/cart-context';

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price
    });
  };

  return (
    <div className='product'>
      <h3>{props.title}</h3>
      <div className="zoom-effect">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="price">{price}</div>
      <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
    </div>
  );
};

export default ProductItem;
