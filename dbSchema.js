var mongoose = require('mongoose');

var defaultSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  default: {
    type: String,
    unique: true
  },
  loan_type: String,
  price: String,
  down_payment_percentage: String,
  zip_code: Number,
  home_insurance: Number,
  other_fees: Number
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
})

var propertyTaxSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  zip_code: {
    type Number,
    unique: true
  },
  property_tax: Number
})

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
})

var DefaultModel = mongoose.model('Default', defaultSchema);
var RateModel = mongoose.model('Rate', rateSchema);
var PropertyTaxModel = mongoose.model('PropertyTax', propertyTaxSchema);
var MortgageInsuranceModel = mongoose.model('MortgageInsurance', mortgageInsuranceSchema);

function findDefault(name, callback) {
  DefaultModel.find({default: name}, callback);
}

function insertDefault(default, callback) {
  DefaultModel.create(default, callback));
}

function findRate(type, callback) {
  RateModel.find({loan_type: type}, callback);
}

function insertRate(rateType, callback) {
  RateModel.create(default, callback);
}

function findPropertyTax(zip, callback) {
  PropertyTaxModel.find({zip_code: zip}, callback)
}

function insertPropertyTax(zipTax, callback) {
  PropertyTaxModel.create(zipTax, callback);
}

function findMortgageInsurance(down, callback) {
  MortgageInsuranceModel.find({down_payment_percentage: down}, callback);
}

function insertMortgageInsurance(downIns, callback) {
  MortgageInsuranceModel.create(downIns, callback);
}


exports.findDefault = findDefault;
exports.insertDefault = insertDefault;
exports.findRate = findRate;
exports.insertRate = insertRate;
exports.findPropertyTax = findPropertyTax;
exports.insertPropertyTax = insertPropertyTax;
exports.findMortgageInsurance = findMortgageInsurance;
exports.insertMortgageInsurance = insertMortgageInsurance;