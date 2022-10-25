import React from 'react';

const Modal = ({ closeModal }) => {
  return (
    <div className='order-modal'>
      <div className='modal-background'>
        <div className='modal-container'>
          <button onClick={() => {closeModal(false)}}>X</button>
          <div className='modal-title'>
            <h1>Order Up!</h1>
          </div>
          <div className='modal-body'>
            <p>Your pizza is being prepared....</p>
          </div>
          <div className='modal-footer'>
            <button onClick={() => {closeModal(false)}}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;