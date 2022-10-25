import React, { useState, useEffect } from 'react';
const axios = require('axios');
// Components
import Router from './Router';

const App = () => {

  // Login state
  const [user, getUserCred] = useState({password: '', username: ''});
  const [isLoggedIn, login] = useState(false);
  const [token, getToken] = useState('');
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
  const [cancel, cancelOrder] = useState({ID: NaN, cancel: false});


  // Authenticate user

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
        console.log('response:', response);
        getToken(response.data.access_token);
        login(false);
      });
    }
  }
  userLogin();

  // Send an Order
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

  // Cancel an Order
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
      updateOrder({...order, ID: res.data.length + 1})
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