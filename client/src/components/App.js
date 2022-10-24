import React, { useState, useEffect } from 'react';
const axios = require('axios');
// Components
import Router from './Router';

const App = () => {

  // Login state
  const [user, getUserCred] = useState({password: '', username: ''});
  const [isLoggedIn, login] = useState(false);

  // Order state
  const [order, updateOrder] = useState({
    Crust: '',
    Flavor: '',
    ID: NaN,
    Size: '',
    Table_No: NaN,
    Timestamp: ''
  });

  const [orderReady, isReady] = useState(false);

  const [orderHist, getOrderHist] = useState([]);
  const[cancel, cancelOrder] = useState({ID: NaN, cancel: false});

  // Send an Order
  const sendOrder = () => {
    if (orderReady) {
      console.log('order:', order);
      axios({
        method: 'post',
        url: '/orders',
        data: order
      })
      .catch((err) => {
        if (err) {
          console.log('sendOrder err:', err);
        }
      })
      .then((res) => {
      console.log(res.data);
      });
    }
  };

  sendOrder();

  // Cancel and Order
  const sendCancellation = () => {
    if (cancel.cancel) {
      axios({
        method: 'delete',
        url: '/orders',
        data: {
          ID: cancel.ID
        }
      })
      .catch((err) => {
        if (err) {
          console.log('Cancel err:', err);
        }
      })
      .then((res) => {
      console.log('cancel RES:', res);
      });
    }
  };

  sendCancellation();

  // Get order History

  const getHistory = () => {
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
      // updateOrder({...order, ID: res.data.length + 1})
    });
  };

  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: '/orders'
  //   })
  //   .catch((err) => {
  //     if (err) {
  //       console.log('orderHist err:', err);
  //     }
  //   })
  //   .then((res) => {
  //     getOrderHist(res.data);
  //     // updateOrder({...order, ID: res.data.length + 1})
  //   });
  // });


  return (
    <div id='app'>
      <Router
      login={login}
      getUserCred={getUserCred}
      user= {user}
      order={order}
      updateOrder={updateOrder}
      orderHist={orderHist}
      getOrderHist={getOrderHist}
      cancelOrder={cancelOrder}
      cancel={cancel}
      isReady={isReady}
      getHistory={getHistory}
      />
    </div>
  )
}

export default App;