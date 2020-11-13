var defaultSchema = mongoose.Schema({
  id: {
    type: Number,
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
  loan_type: String,
  interest_rate: Number
})

var propertyTaxSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  zip_code: Number,
  property_tax: Number
})

var mortgageInsuranceSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  down_payment_percentage: Number,
  mortgage_insurance: Number
})

