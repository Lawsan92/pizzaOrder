import React, { useState, updateOrder, order } from 'react';
import NavBar from './NavBar'
import CartModal from './CartModal';

const Cart = ({ cart, checkoutCart, user, token }) => {

  let itemNo = 0;
  const [openModal, setOpenModal] = useState(false);

  const RenderCart = () => {
    return cart.map((item) => {
      itemNo ++;
      return (
        <div id={'cart-item'} key={`order ${item.Order_ID}`}>
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
      <NavBar user={user} token={token}/>
      {openModal ?  <CartModal closeModal={setOpenModal}/> : <></>}
      <div id='cart-body'>
      {RenderCart()}
      </div>
      <button className='order-button'
        onClick={() => {
          if (cart.length) {
            checkoutCart(true);
            setOpenModal(true);
          } else {
            alert('Cart is Empty')
          }
          }}>Order</button>
    </div>
  );
};

export default Cart;