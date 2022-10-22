const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

app.get('/test', (req, res) => {
  res.status(200).send('hello world');
})

app.get('https://order-pizza-api.herokuapp.com/api/orders', (req, res) => {
  console.log('res.body:', res.body);
})

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(process.env.PORT, () => {
  console.log(`listening to port: ${process.env.PORT}`)
})

app.use(express.json());