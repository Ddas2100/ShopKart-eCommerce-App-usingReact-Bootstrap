import React from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

const HeaderCartIcon = (props) => {
    return (
        <button className="button bump" onClick={props.onClick}> 
            <span className="icon">
                <CartIcon />
            </span>
            <span> Cart</span>
            <span className="badge">0</span>
        </button>
    );
};

export default HeaderCartIcon;
