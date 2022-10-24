import React, { useEffect } from 'react';
import NavBar from './NavBar';
const axios = require('axios');

const History = ({ orderHist, getOrderHist }) => {

  const Options = () => {
    return orderHist.map((order, index) => {
      // console.log('index:', index, 'order:', order);
      return (
      <div id='order' key={order.Order_ID}>
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
        console.log('orderHist err:', err);
      }
    })
    .then((res) => {
      getOrderHist(res.data);
    });
  });

  return (
    <div id='history'>
      <NavBar/>
      <h1>History</h1>
      {Options()}
    </div>
  );
};

export default History;