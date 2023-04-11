var express = require('express');
var path = require('path');

var indexRouter = require('./index');

var app = express();

app.use('/', indexRouter);
// app.use(express.static(path.join(__dirname, '')));
app.use(express.static(__dirname));

module.exports = app;
