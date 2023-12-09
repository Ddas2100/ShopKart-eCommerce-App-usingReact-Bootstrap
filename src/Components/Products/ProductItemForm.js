// import React, { useState, useRef } from "react";
// import './ProductItemForm.css';
// import Input from "../UI/Input";

// const ProductItemForm = (props) => {

//     const [formIsValid, setFormIsValid] = useState(true);
//     const amountInputRef = useRef();

//     const submitHandler = event => {
//         event.preventDefault();

//         const enteredAmount = amountInputRef.current.value;
//         const enteredAmountNum = +enteredAmount;

//         if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5)
//            {
//             setFormIsValid(false);
//             return;
//            } 
//            props.onAddToCart(enteredAmountNum); 
//     }

//     return (
//         <form className="form" onSubmit={submitHandler}>
//             <Input
//             ref={amountInputRef} 
//             label="Quantity:" 
//             input={{
//                 id: 'amount',
//                 type: 'number',
//                 min: '1',
//                 max: '5',
//                 step: '1',
//                 defaultValue: '0'
//             }} />
//             <button>Add to Cart</button>
//             {!formIsValid && <p>Please enter a Vaid Amount Between 1 and 5</p>} 
//         </form>
//     );
// };

// export default ProductItemForm;

import React from "react";
import './ProductItemForm.css';
import Button from "../UI/Button";

const ProductItemForm = (props) => {

    const addToCartHandler = () => {
        props.onAddToCart(1); 
    };

    return (
        <form className="form" onSubmit={event => event.preventDefault()}>
            <Button onAddToCart={addToCartHandler}>Add to Cart</Button>
        </form>
    );
};

export default ProductItemForm;
