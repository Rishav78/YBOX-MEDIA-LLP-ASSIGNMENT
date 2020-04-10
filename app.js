//@ts-check
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('./config/db');

app.use(require('./routes'));

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));