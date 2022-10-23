import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
      <Link to='/' className='site-title'>
        Pizza!
      </Link>
      <ul>
        <li>
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