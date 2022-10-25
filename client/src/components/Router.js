import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Components
import Login from './pages/Login.js';
import Checkout from './pages/Checkout.js';
import History from './pages/History.js';
import Home from './pages/Home.js';
import Cart from './pages/Cart.js';

const Router = ({ login, getUserCred, user, order, updateOrder, orderHist, getOrderHist, cancelOrder, cancel, isReady, getHistory, cart, addToCart }) => {
  return (
  <Routes>
    <Route path='/' element={<Home  />} />
    <Route path='login' element={<Login login={login} getUserCred={ getUserCred } user={user}/>} />
    <Route path='/history' element={<History orderHist={orderHist} getOrderHist={getOrderHist} order={order} updateOrder={updateOrder} cancelOrder={cancelOrder} cancel={cancel} getHistory={getHistory}/>} />
    <Route path='/checkout' element={<Checkout order={order} updateOrder={updateOrder} isReady={isReady} addToCart={addToCart}/>} />
    <Route path='/cart' element={<Cart cart={cart} isReady={isReady}/>} />
  </Routes>
  );
}

export default Router;


