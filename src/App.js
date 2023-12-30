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
import ContactUs from './Pages/ContactUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/about-us', element: <div> <AboutUs /> <FooterNav /> </div> },
      { path: '/home', element: <div> <Home /> <FooterNav /> </div> },
      { path: '/', element: <div> <AvailableProducts /> <FooterNav/> </div>},
      { path: '/contact-us', element: <div> <ContactUs /> <FooterNav /> </div> }
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
    <RouterProvider router={router}>
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <AvailableProducts />
        </main>
        <FooterNav />
    </CartProvider>
    </RouterProvider>
  );
};

export default App;
