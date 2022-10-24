import React, { useState } from 'react';

// Components
import Router from './Router';

const App = () => {

  // Login state
  const [user, getUserCred] = useState({password: '', username: ''});
  const [isLoggedIn, login] = useState(false);

  // Order state
  const [order, updateOrder] = useState({
    Crust: '',
    Flavor: '',
    Size: '',
    Timestamp: ''
  });


  return (
    <div id='app'>
      <Router
      login={login}
      getUserCred={getUserCred}
      user= {user}
      order={order}
      updateOrder={updateOrder}
      />
    </div>
  )
}

export default App;