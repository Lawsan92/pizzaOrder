import React from 'react';
import NavBar from './NavBar';

const Home = ({ user, token }) => {
  return (
    <div id='home'>
      <NavBar user={user} token={token}/>
      <div id='home-main'>
        <img src='https://res.cloudinary.com/darp0mj9i/image/upload/v1666815188/samples/pizza_tlauzy.jpg'/>
      </div>
    </div>
  );
}

export default Home;