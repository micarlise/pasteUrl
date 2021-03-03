
const express = require('express');
const morgan = require('morgan');

const paste = require('./routes/paste');

let logger = morgan('short');

let app = express();

app.use(logger);

app.use('/', paste);

app.listen(3000);
