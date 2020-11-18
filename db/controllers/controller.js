var express = require('express');
var model = require('../models/dbSchema.js');

var getSettings = (callback) => {
  var settings = {
    default: {},
    rates: {},
    propertyTax: {},
    mortgageInsurance: {}
  }
  model.findDefault((err, data) => {
    if (err) {
      console.log('Error Getting Default Settings');
    } else {
      console.log('Default  Settings Received');
      settings.default = data;
      model.findAllRates((err, data) => {
        if (err) {
          console.log('Error Getting Interest Rates');
        } else {
          console.log('Interest Rates Received');
          settings.rates = data;
          model.findAllPropertyTax((err, data) => {
            if (err) {
              console.log('Error Getting Property Taxes');
            } else {
              console.log('Property Tax Rates Received');
              settings.propertyTax = data;
              model.findAllMortgageInsurance((err, data) => {
                if (err) {
                  console.log('Error Getting Mortgage Insurance Rates');
                } else {
                  console.log('Mortgage Insurance Rates Received');
                  settings.mortgageInsurance = data;
                  callback(null, settings);
                }
              })
            }
          })
        }
      })
    }
  });
}

var getListing = (id, callback) => {
  model.findListing(id, (err, data) => {
    if (err) {
      console.log("Error getting listing");
    } else {
      console.log("Listing Received");
      callback(null, data);
    }
  });
}



exports.getSettings = getSettings;
exports.getListing = getListing;

// getListing(20, (err, data) => {
//   if (err) {
//     console.log('error: ', err);
//   } else {
//     console.log('success: ', data);
//   }
// });