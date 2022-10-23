import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const Checkout = () => {
  const [order, updateOrder] = useState({});
  return (
    <div id='checkout'>
      <NavBar/>
      <h1>Checkout</h1>
    </div>
  );
};

export default Checkout;