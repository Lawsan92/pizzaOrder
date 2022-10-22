import React from 'react';

const NavBar = () => {
  return (
    <div className='nav'>
      <a href='/' className='site-title'>
        Site Title
      </a>
      <ul>
        <li className='active'>
          <a href='/pricing'>Pricing</a>
        </li>
        <li>
        <a href='/about'>About</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;