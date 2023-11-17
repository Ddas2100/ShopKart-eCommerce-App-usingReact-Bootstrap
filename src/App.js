import React, { Fragment } from 'react';
import Header from './Components/Layout/Header';
import AvailableProducts from './Components/Products/AvailableProducts';

function App () {
  return (
    <Fragment>
      <Header />
      <section>
      </section>
      <main>
        <AvailableProducts />
      </main>
    </Fragment>
  );
}

export default App;
