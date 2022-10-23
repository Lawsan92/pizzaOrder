import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Components
import Login from './Login';
import Checkout from './Checkout';
import History from './History';
import Home from './Home';

const Router = () => {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='login' element={<Login />} />
    <Route path='/history' element={<History />} />
    <Route path='/checkout' element={<Checkout />} />
  </Routes>
  );
}

export default Router;