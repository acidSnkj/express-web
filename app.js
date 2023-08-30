const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT;

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {});

app.listen(3000, () => {
  debug(`server is running on port ${chalk.green(PORT)}`);
});
