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

  router.route('/find/')

  module.exports = router;