var mongoose = require('mongoose');

var listingSchema = mongoose.Schema({
  listingid: {
    type: Number,
    unique: true
  },
  price: Number
});

var defaultSchema = mongoose.Schema({
  loan_type: String,
  down_payment_percentage: Number,
  state: String,
  home_insurance: Number
});

var rateSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  loan_type: {
    type: String,
    unique: true
  },
  interest_rate: Number
});

var propertyTaxSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  state: {
    type: String,
    unique: true
  },
  property_tax: Number
});

var mortgageInsuranceSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  down_payment_percentage: {
    type: Number,
    unique: true
  },
  mortgage_insurance: Number
});

var ListingModel = mongoose.model('Listing', listingSchema);
var DefaultModel = mongoose.model('Default', defaultSchema);
var RateModel = mongoose.model('Rate', rateSchema);
var PropertyTaxModel = mongoose.model('PropertyTax', propertyTaxSchema);
var MortgageInsuranceModel = mongoose.model('MortgageInsurance', mortgageInsuranceSchema);

function findListing(id, callback) {
  ListingModel.find({listingid: id}, callback);
}

function insertListings(listings, callback) {
  ListingModel.create(listings, callback)
}

function findDefault(callback) {
  DefaultModel.find({}, callback);
}

function insertDefault(settings, callback) {
  DefaultModel.create(settings, callback);
}

function findAllRates(callback) {
  RateModel.find({}, callback);
}

function insertRates(rateType, callback) {
  RateModel.create(rateType, callback);
}

function findAllPropertyTax(callback) {
  PropertyTaxModel.find({}, callback)
}

function insertPropertyTax(zipTax, callback) {
  PropertyTaxModel.create(zipTax, callback);
}

function findAllMortgageInsurance(callback) {
  MortgageInsuranceModel.find({}, callback);
}

function insertMortgageInsurance(downIns, callback) {
  MortgageInsuranceModel.create(downIns, callback);
}

exports.findListing = findListing;
exports.insertListings = insertListings;
exports.findDefault = findDefault;
exports.insertDefault = insertDefault;
exports.findAllRates = findAllRates;
exports.insertRates = insertRates;
exports.findAllPropertyTax = findAllPropertyTax;
exports.insertPropertyTax = insertPropertyTax;
exports.findAllMortgageInsurance = findAllMortgageInsurance;
exports.insertMortgageInsurance = insertMortgageInsurance;