var express = require('express');
var controller = require('../../db/controllers/controller.js');
const app = express();

var router = express.Router();

router.route('/settings')
  .get((req, res) => {
    controller.getSettings((err, data) => {
      res.json(data);
    })
  });

  router.route('/listings/:listing_id')
    .get((req, res) => {
      controller.getListing(req.params.listing_id, (err, data) => {
        if (err) {
          console.log('Error finding listing')
          res.sendStatus(404);
        } else {
          res.json(data);
        }
      })
    })

  module.exports = router;