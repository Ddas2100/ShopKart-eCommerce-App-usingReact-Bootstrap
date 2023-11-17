import React from "react";
import './HeaderNav.css';

const HeaderNav = () => {
    return(
           <React.Fragment>
            <div>
                <button className="badge">HOME</button>
                <button className="badge">STORE</button>
                <button className="badge">ABOUT</button>
            </div>
           </React.Fragment>     
    )
};

export default HeaderNav;
