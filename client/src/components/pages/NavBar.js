import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
      <Link to='/' className='site-title'>
        Site Title
      </Link>
      <ul>
        <li className='active'>
          <Link to='/checkout'>Checkout</Link>
        </li>
        <li>
          <Link to='/history'>About</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;