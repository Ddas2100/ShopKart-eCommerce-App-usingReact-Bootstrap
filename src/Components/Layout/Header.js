import React from 'react';
import './Header.css';
import HeaderCartIcon from './HeaderCartIcon';
import HeaderNav from './HeaderNav';
import SecondHeader from './SecondHeader';

const Header = (props) => {

    return(
        <React.Fragment>
            <div>
                <HeaderNav/>
                <HeaderCartIcon onClick={props.onShowCart} /> 
            </div>
            <SecondHeader />
            
        </React.Fragment>
    )
}

export default Header;