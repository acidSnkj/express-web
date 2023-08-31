const express = require('express');
const chalk = require('chalk'); // colors to console.log
const debug = require('debug')('app'); // debug messages into terminal
const morgan = require('morgan'); // HTTP request logger middleware - output the requests

const path = require('path');
const PORT = process.env.PORT;

const app = express();
const sessionsRouter = require('./src/routers/sessionsRoutes');

// Middleware
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));

// Routes
app.use('/sessions', sessionsRouter);

// Set variables to our enviroment
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', { title: 'To my web page', data: ['a', 'b', 'c'] });
});

app.listen(3000, () => {
  debug(`server is running on port ${chalk.green(PORT)}`);
});
