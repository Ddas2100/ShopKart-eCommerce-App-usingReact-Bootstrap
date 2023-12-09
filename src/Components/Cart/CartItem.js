// CartItem.js
import classes from './CartItem.module.css';
import { useContext } from 'react';
import CartContext from '../../Store/cart-context';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = () => {
        cartCtx.removeItem(props.id);
    };

    const cartItemAddHandler = () => {
        cartCtx.addItem({ ...props, amount: 1 });
    };

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.title}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={cartItemRemoveHandler}>−</button>
                <button onClick={cartItemAddHandler}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
