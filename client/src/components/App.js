import React, { useState, useEffect, useRef } from 'react';
const axios = require('axios');
import Router from './Router';

const App = () => {

    // STATE: login
  const [user, getUserCred] = useState({password: '', username: ''});
  const [isLoggedIn, login] = useState(false);
  const [token, getToken] = useState('');

    // STATE: orders
  const [order, updateOrder] = useState({
    Crust: '',
    Flavor: '',
    Order_ID: NaN,
    Size: '',
    Table_No: NaN,
    Timestamp: ''
  });
  const [orderReady, isReady] = useState(false);
  const [orderHist, getOrderHist] = useState([]);
  const [cancel, cancelOrder] = useState({ID: NaN, cancel: false});
  const [orderID, setID] = useState(0);

  // STATE: cart

  const [cart, addToCart] = useState([]);

  // Authenticate user (-POST /auth)
  const userLogin = () => {
    if (isLoggedIn) {
      axios({
        method: 'post',
        url: '/auth',
        data: user
      })
      .catch((err) => {
        if (err) {
          console.log('userLogin  err:', err);
          res.send(err);
        }
      })
      .then((response) => {
        console.log('user authenticated!:');
        console.log('response:', response);
        getToken(response.data.access_token);
        login(false);
      });
    }
  }
  userLogin();

  // Send an Order (-POST /orders)
  const sendOrder = () => {
    axios({
      method: 'post',
      url: '/orders',
      data: {
        order: order,
        token: token
      }
    })
    .catch((err) => {
      if (err) {
        console.log('sendOrder err:', err);
      }
    })
    .then((res) => {
    console.log('order:', order);
    console.log('.then sendOrder:', res);
    isReady(false);
    });
  };

  if (orderReady) {
    sendOrder();
    isReady(false);
  }

  // Cancel an Order (-DELETE/orders)
  const sendCancellation = () => {
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
    cancelOrder({...cancel, cancel: false});
    console.log('cancel RES:', res);
    });
  };

  if (cancel.cancel) {
    sendCancellation();
  }

  // Get order History (-GET/orders)
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
      updateOrder({...order, Order_ID: res.data.length + 1})
    });
  };

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
      updateOrder({...order, Order_ID: res.data.length + 1})
    });
  }, [orderID]);

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
      cart={cart}
      addToCart={addToCart}
      />
    </div>
  )
}

export default App;