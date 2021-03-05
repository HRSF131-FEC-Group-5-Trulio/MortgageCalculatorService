var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./routers/router.js');
// var cors = require('cors')
var PORT = 3001;

var app = express();

mongoose.connect('mongodb://localhost/mortgagecalculator');

// app.use('/api/MortgageCalculator', cors())

app.use(bodyParser.json());

// app.use("/:id", express.static(__dirname + '/../client/dist'));

app.use('/listings/:id', express.static(__dirname + '/../client/dist'));

app.use('/api/MortgageCalculator', router); // possible change to /api/MortgageCalculator/:id/ _Thomas

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});