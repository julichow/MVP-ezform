var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); // add at the top

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/employees');

var app = express();

app.use(cors()); // add after 'app' is created
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public'))); //comment out as we'll have our own public folder

app.use('/', indexRouter);
app.use('/api/employees', usersRouter);

module.exports = app;
