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
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "/client/dist")));

app.use('/', indexRouter);
app.use('/api', usersRouter);

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/dist/index.html"));
  });

module.exports = app;
