import React from 'react';
import NavBar from './NavBar';

const Home = ({ user, token }) => {
  return (
    <div id='home'>
      <NavBar user={user} token={token}/>
      <h1>Welcome!</h1>
    </div>
  );
}

export default Home;