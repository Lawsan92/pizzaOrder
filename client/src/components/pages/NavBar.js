import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user, token }) => {

  const Login = () => {
    if (token === '') {
      return (
        <li>
          <Link to='/login'>Login</Link>
        </li>
      );
    } else {
      return (
      <a>
        Welcome Back {user.username}
      </a>
      )
    }
  };

  return (
    <div className='nav'>
      <Link to='/' className='site-title'>
        Pizza!
      </Link>
      <div id='search-bar'>
        <input type='text' placeholder='search...'/>
        <button id='search-button'>
          <img id ='mag' src='https://res.cloudinary.com/darp0mj9i/image/upload/v1666116514/samples/magnifying-glass-svgrepo-com_nflk4y.svg'></img>
        </button>
      </div>
      <ul>
        <li>
          <Link to='/checkout'>Checkout</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
        <li>
          <Link to='/history'>Your Orders</Link>
        </li>
        {Login()}
      </ul>
    </div>
  )
}

export default NavBar;