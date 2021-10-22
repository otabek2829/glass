const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('read_three' , {
      title: "Как правильно выбрать очки для зрения?"
  });
});

module.exports = router;
