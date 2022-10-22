const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

app.get('/test', (req, res) => {
  res.status(200).send('hello world');
})

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(process.env.PORT, () => {
  console.log(`listening to port: ${process.env.PORT}`)
})