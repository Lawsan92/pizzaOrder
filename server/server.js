const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
require('dotenv').config();

app.get('/test', (req, res) => {
  res.status(200).send('hello world');
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

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(process.env.PORT, () => {
  console.log(`listening to port: ${process.env.PORT}`)
});

app.use(express.json());

app.get('/*', function(req, res) { // <-- add
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
});
