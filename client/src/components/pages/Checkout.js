import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Modal from './Modal';

const Checkout = ({ order, updateOrder, isReady }) => {

  const [openModal, setOpenModal] = useState(false);

  const makeOrder = (option) => {
    console.log('className:', option.className, 'value:', option.value);
    if (option.className === 'Crust') {
      updateOrder({ ...order, Crust: option.value });
    } else if (option.className === 'Flavor') {
      updateOrder({ ...order, Flavor: option.value });
    } else if (option.className === 'Size') {
      updateOrder({ ...order, Size: option.value });
    }
  }

  return (
    <div id='checkout'>
      <NavBar/>
      {openModal ?  <Modal closeModal={setOpenModal}/> : <></>}
      <div className='checkout-form'>
        <form className>
          <h3>Crust</h3>
          <input type='radio' id='thin' value='THIN' className='Crust' onClick={(event) => {makeOrder(event.target)}}/>
          <label htmlFor='thin'>thin</label>
          <input type='radio' id='normal' value='NORMAL' className='Crust' onClick={(event) => {makeOrder(event.target)}}/>
          <label htmlFor='thick'>normal</label>
          <input type='radio' id='thick' value='THICK'  className='Crust'onClick={(event) => {makeOrder(event.target)}}/>
          <label htmlFor='thick'>thick</label>
        </form>
        <form>
          <h3>Flavor</h3>
          <input type='radio' id='cheese' value='CHEESE' className='Flavor' onClick={(event) => {makeOrder(event.target)}}/>
          <label htmlFor='cheese'>cheese</label>
          <input type='radio' id='pepperoni' value='PEPPERONI' className='Flavor' onClick={(event) => {makeOrder(event.target)}}/>
          <label htmlFor='pepproni'>pepperoni</label>
          <input type='radio' id='sausage' value='SAUSAGE' className='Flavor' onClick={(event) => {makeOrder(event.target)}}/>
          <label htmlFor='sausage'>sausage</label>
          <input type='radio' id='chicken-fajita' value='CHICKEN-FAJITA' className='Flavor' onClick={(event) => {makeOrder(event.target)}}/>
          <label htmlFor='chicken-fajita'>chicken-fajita</label>
          <input type='radio' id='veggie' value='VEGGIE' className='Flavor' onClick={(event) => {makeOrder(event.target)}}/>
          <label htmlFor='veggie'>veggie</label>
        </form>
        <form>
          <h3>Size</h3>
          <input type='radio' id='S' value='S' className='Size' onClick={(event) => {makeOrder(event.target)}}/>
          <label htmlFor='S'>S</label>
          <input type='radio' id='M' value='M' className='Size' onClick={(event) => {makeOrder(event.target)}}/>
          <label htmlFor='M'>M</label>
          <input type='radio' id='L' value='L' className='Size' onClick={(event) => {makeOrder(event.target)}}/>
          <label htmlFor='L'>L</label>
        </form>
        <form>
          <h3>Table_No</h3>
          <input type='text' onChange={(e) => {updateOrder({...order, Table_No: Number(e.target.value)})}}></input>
        </form>
        <button className='order-button'
        onClick={() => {
          let date = new Date();
          updateOrder({...order, Timestamp: date.toISOString()});
          isReady(true);
          setOpenModal(true);
          }}>Order</button>
        </div>
    </div>
  );
};

export default Checkout;