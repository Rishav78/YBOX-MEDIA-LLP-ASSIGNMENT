//@ts-check

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('./config/db');

app.use(express.json());

app.use(require('./routes'));

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));