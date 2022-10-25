import React, { useState, updateOrder, order } from 'react';
import NavBar from './NavBar'
import Modal from './Modal';

const Cart = ({ cart, checkoutCart }) => {

  let itemNo = 0;
  const [openModal, setOpenModal] = useState(false);

  const RenderCart = () => {
    return cart.map((item) => {
      itemNo ++;
      return (
        <div id={`order ${item.Order_ID}`} key={itemNo}>
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
      <button className='order-button'
        onClick={() => {
          checkoutCart(true);
          setOpenModal(true);
          }}>Order</button>
    </div>
  );
};

export default Cart;