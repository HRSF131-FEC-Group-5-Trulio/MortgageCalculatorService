var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./routers/router.js');
var PORT = 3000;

var app = express();

mongoose.connect('mongodb://localhost/mortgagecalculator');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.use('/api/mortgagedata', router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});