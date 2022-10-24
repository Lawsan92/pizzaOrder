import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
const axios = require('axios');

const Checkout = () => {

  const [orders, updateOrder] = useState([]);

  const Options = () => {
    return orders.map((order, index) => {
      console.log('index:', index, 'order:', order);
      return (
      <div id='order'>
        <ul>
          <li>Crust: {order.Crust}</li>
          <li>Flavor: {order.Flavor}</li>
          <li>ID: {order.Order_ID}</li>
          <li>Size: {order.Size}</li>
          <li> Table No: {order.Table_No}</li>
          <li>Timestamp: {order.Timestamp}</li>
        </ul>
      </div>
      );
    })
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: '/orders'
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
      {Options()}
    </div>
  );
};

export default Checkout;