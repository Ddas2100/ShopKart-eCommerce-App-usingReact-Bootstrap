import React from 'react';
import HeaderNav from './Components/Layout/HeaderNav';
import AvailableProducts from './Components/Products/AvailableProducts';
import FooterNav from './Components/Layout/FooterNav';


const App = () => {
  return (
    <>
      <HeaderNav/>
      <AvailableProducts />
      <FooterNav />
    </>
  );
}

export default App;
