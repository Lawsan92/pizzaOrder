import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
const axios = require('axios');

const Checkout = () => {

  const [order, updateOrder] = useState({});

  useEffect(() => {
    axios({
      method: 'get',
      url: '/backorders'
    })
    .catch((err) => {
      if (err) {
        console.log('Checkout.js err:', err);
      }
    })
    .then((res) => {
      updateOrder(res.data);
    });
  });

  return (
    <div id='checkout'>
      <NavBar/>
      <h1>Checkout</h1>
    </div>
  );
};

export default Checkout;