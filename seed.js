var mongoose = require('mongoose');
var seed_data = require('./seed_data.js');
var model = require('./db/models/dbSchema.js');

mongoose.connect('mongodb://localhost/mortgagecalculator');

var seedDb = function(data) {
  let listings = [];
  for (let i = 1; i <= 100; i++) {
    let listingPrice = (Math.floor(Math.random() * 5000) + 101) * 1000;
    listings.push({
      listingid: i,
      price: listingPrice
    });
  }

  model.insertListings(listings, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Saved Listings');
    }
  });
  model.insertDefault(data.default, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Saved Default');
    }
  });
  model.insertRates(data.interest_rates, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Saved Rates');
    }
  });
  model.insertPropertyTax(data.property_tax, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Saved Propterty Taxes');
    }
  });
  model.insertMortgageInsurance(data.mortgage_insurance, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Saved Mortgage Insurance');
    }
  });

};

seedDb(seed_data);