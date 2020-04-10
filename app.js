const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('./config/db');

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => console.log(`LISNING ON PORT ${PORT}`));