const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();
const [token, getTokenObj] = [process.env.access_token, JSON.parse(process.env.getTokenObj)];
console.log('getTokenObj:', getTokenObj);
const app = express();

// ---Middleware---
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))

// ---Route Handlers---
app.get('/test', (req, res) => {
  res.sendStatus(200).send('hello world');
});

// authernticate user
app.post('/auth', (req, res) => {
  axios({
    method: 'post',
    url: 'https://order-pizza-api.herokuapp.com/api/auth',
    data: getTokenObj
  })
  .catch((err) => {
    if (err) {
      console.log('app.post/auth err:', err);
      res.send(err);
    }
  })
  .then((response) => {
    res.status(201).send(response.data);
    console.log('user authenticated!');
  });
})

// Get a list of pizza orders
app.get('/orders', (req, res) => {
  axios.get('https://order-pizza-api.herokuapp.com/api/orders')
    .catch((err) => {
      if (err) {
        console.log('app.get/backorders err:', err);
      }
    })
    .then((response) => {
      res.status(200).send(response.data);
    });
});

// Order Pizza
app.post('/orders', (req, res) => {
  axios({
    method: 'post',
    url: 'https://order-pizza-api.herokuapp.com/api/orders',
    data: req.body.order,
    headers: {
      Authorization: `Bearer ${req.body.token}`
    }
  })
  .catch((err) => {
    if (err) {
      console.log('app.post /orders err:', err);
      res.send(err);
    }
  })
  .then((response) => {
    res.status(201).send('Order Up!');
  });
});

// Cancel Order
app.delete(`/orders`, (req, res) => {
  let cancelURl = `https://order-pizza-api.herokuapp.com/api/orders/${req.body.ID}`;
  console.log('req:', req.body.ID)
  axios({
    method: 'delete',
    url: cancelURl,
    // data: {ID: req.body.ID},
    // headers: {
    //   Authorization: `Bearer ${token}`
    // }
  })
  .catch((err) => {
    if (err) {
      console.log('(app.delete) ERR:', err);
      res.send(err);
    }
  })
  .then((response) => {
    res.status(201).send('Order Cancelled!');
  });

})


app.listen(process.env.PORT, () => {
  console.log(`listening to port: ${process.env.PORT}`)
});

// redirect all server requests to bundles.js for client-side routing
app.get('/*', function(req, res) { // <-- add
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
});

/*
* curl -d '{"Crust": "NORMAL", "Flavor": "SAUSAGE", "Order_ID": 5, "Size": "M", "Table_No": 1, "Timestamp": "2022-09-03T18:21:08.710006"}' -H "Content-Type: application/json" -POST "localhost:3000/orders"

* curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"Crust": "NORMAL", "Flavor": "CHEESE", "Order_ID": 1, "Size": "M", "Table_No": 1, "Timestamp": "2022-09-03T18:21:08.710006"}' 'https://order-pizza-api.herokuapp.com/api/orders'

* curl -d '{}' -H "Content-Type: application/json" -POST "localhost:3000/orders"
}
*/