import React, { useEffect } from 'react';
import NavBar from './NavBar';
const axios = require('axios');

const History = ({ orderHist, getOrderHist, updateOrder, order, cancelOrder, cancel, getHistory, user, token }) => {

  const Options = () => {
    return orderHist.map((order, index) => {
      return (
      <div id={`order ${order.Order_ID}`} key={order.Order_ID}>
        <ul>
          <li>Crust: {order.Crust}</li>
          <li>Flavor: {order.Flavor}</li>
          <li>ID: {order.Order_ID}</li>
          <li>Size: {order.Size}</li>
          <li> Table No: {order.Table_No}</li>
          <li>Timestamp: {order.Timestamp}</li>
        </ul>
        <button id={order.Order_ID} onClick={(e) => {cancelOrder({...cancel, cancel: true, ID: Number(e.target.id)})}}>Cancel</button>
      </div>
      );
    })
  }

  return (
    <div id='history'>
      <NavBar user={user} token={token}/>
      <h1>History</h1>
      <button onClick={() => {getHistory()}}>Get Order History</button>
      {Options()}
    </div>
  );
};

export default History;