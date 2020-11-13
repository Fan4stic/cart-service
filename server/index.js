const express = require('express');
const db = require('../db/connection.js').connection;
const app = express ();
const PORT = 3003;
const {seedDB} = require('../db/seed.js');

app.get('/order', (req, res) => {
  seedDB();
  res.status(201).send('database seeded');
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});