import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const Checkout = ({ order, updateOrder, isReady }) => {

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
      <form>
        <h3>Crust</h3>
        <input type='radio' id='thin' value='THIN' className='Crust' onClick={(event) => {makeOrder(event.target)}}/>
        <label for='thin'>thin</label>
        <input type='radio' id='normal' value='NORMAL' className='Crust' onClick={(event) => {makeOrder(event.target)}}/>
        <label for='thick'>normal</label>
        <input type='radio' id='thick' value='THICK'  className='Crust'onClick={(event) => {makeOrder(event.target)}}/>
        <label for='thick'>thick</label>
      </form>
      <form>
        <h3>Flavor</h3>
        <input type='radio' id='cheese' value='cheese' className='Flavor' onClick={(event) => {makeOrder(event.target)}}/>
        <label for='cheese'>cheese</label>
        <input type='radio' id='pepperoni' value='pepperorni' className='Flavor' onClick={(event) => {makeOrder(event.target)}}/>
        <label for='pepproni'>pepperoni</label>
        <input type='radio' id='sausage' value='sausage' className='Flavor' onClick={(event) => {makeOrder(event.target)}}/>
        <label for='sausage'>sausage</label>
        <input type='radio' id='chicken-fajita' value='chicken-fajita' className='Flavor' onClick={(event) => {makeOrder(event.target)}}/>
        <label for='chicken-fajita'>chicken-fajita</label>
      </form>
      <form>
        <h3>Size</h3>
        <input type='radio' id='S' value='S' className='Size' onClick={(event) => {makeOrder(event.target)}}/>
        <label for='S'>S</label>
        <input type='radio' id='M' value='M' className='Size' onClick={(event) => {makeOrder(event.target)}}/>
        <label for='M'>M</label>
        <input type='radio' id='L' value='L' className='Size' onClick={(event) => {makeOrder(event.target)}}/>
        <label for='L'>L</label>
      </form>
      <form>
        <h3>Table_No</h3>
        <input type='text' onChange={(e) => {updateOrder({...order, Table_No: Number(e.target.value)})}}></input>
      </form>
      <button
      className='order-button'
      onClick={() => {
        let date = new Date();
        updateOrder({...order, Timestamp: date.toISOString()});
        isReady(true);
        }}>Order</button>
    </div>
  );
};

export default Checkout;