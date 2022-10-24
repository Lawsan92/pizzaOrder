import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Components
import Login from './pages/Login.js';
import Checkout from './pages/Checkout.js';
import History from './pages/History.js';
import Home from './pages/Home.js';

const Router = ({ login, getUserCred, user, order, updateOrder, orderHist, getOrderHist }) => {
  return (
  <Routes>
    <Route path='/' element={<Home  />} />
    <Route path='login' element={<Login login={login} getUserCred={ getUserCred } user={user}/>} />
    <Route path='/history' element={<History orderHist={orderHist} getOrderHist={getOrderHist}/>} />
    <Route path='/checkout' element={<Checkout order={order} updateOrder={updateOrder}/>} />
  </Routes>
  );
}

export default Router;


// git add -A && git commit -am '' && git push