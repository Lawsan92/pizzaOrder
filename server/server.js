const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const app = express();

// ---Middleware---
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))

// ---Route Handlers---
app.get('/test', (req, res) => {
  res.sendStatus(200).send('hello world');
});

app.get('/backorders', (req, res) => {
  axios.get('https://order-pizza-api.herokuapp.com/api/orders')
    .catch((err) => {
      if (err) {
        console.log('server.js err:', err);
      }
    })
    .then((response) => {
      res.status(200).send(response.data);
    });
});

app.post('/orders', (req, res) => {
  res.status(200).send('order up!');
  console.log('req.data:', req.body);
});



app.listen(process.env.PORT, () => {
  console.log(`listening to port: ${process.env.PORT}`)
});

app.get('/*', function(req, res) { // <-- add
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
});

/*
curl -d '{"Crust": "NORMAL", "Flavor": "CHEESE", "Order_ID": 1, "Size": "M", "Table_No": 1, "Timestamp": "2022-09-03T18:21:08.710006"}' -H "Content-Type: application/json" -POST "localhost:3000/orders"

curl -d '{}' -H "Content-Type: application/json" -POST "localhost:3000/orders"
}
*/