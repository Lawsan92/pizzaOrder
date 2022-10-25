import React from 'react';
import NavBar from './NavBar'

const Cart = ({ cart }) => {

  let itemNo = 0;

  const RenderCart = () => {
    return cart.map((item) => {
      itemNo ++;
      return (
        <div id={`order ${item.Order_ID}`}>
          <h3>{itemNo}</h3>
          <p>Crust: {item.Crust}</p>
          <p>Flavor: {item.Flavor}</p>
          <p>Order_ID: {item.Order_ID}</p>
          <p>Size: {item.Size}</p>
          <p>Table_No: {item.Table_No}</p>
          <p>Timestamp: {item.Timestamp}</p>
        </div>
      );
    })
  }

  return (
    <div id='cart'>
      <NavBar/>
      {RenderCart()}
    </div>
  );
};

export default Cart;