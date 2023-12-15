import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Components/Layout/Header';
import AvailableProducts from './Components/Products/AvailableProducts';
import FooterNav from './Components/Layout/FooterNav';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';
import AboutUs from './Pages/AboutUs';
import RootLayout from './Pages/Root';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/about-us', element: <AboutUs /> },
      { path: '/home', element: <Home /> }
    ],
  }
]);

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <RouterProvider router={router}>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <AvailableProducts />
        </main>
        <FooterNav />
      </RouterProvider>
    </CartProvider>
  );
};

export default App;
