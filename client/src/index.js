import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
    <Route path='/' element={<div>Home</div>}></Route>
    <Route path='/about' element={<div>About</div>}></Route>
  </Routes>
</BrowserRouter>
);