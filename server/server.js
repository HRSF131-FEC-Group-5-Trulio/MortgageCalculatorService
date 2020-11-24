var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./routers/router.js');
var cors = require('cors')
var PORT = 3004;

var app = express();

mongoose.connect('mongodb://localhost/mortgagecalculator');

app.use('/:id/api/MortgageCalculator', cors())

app.use(bodyParser.json());

app.use("/:id", express.static(__dirname + '/../client/dist'));

app.use('/:id/api/MortgageCalculator', router); // possible change to /api/MortgageCalculator/:id/ _Thomas

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});