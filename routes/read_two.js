const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('read_two' , {
      title: "Как правильно выбрать солнцезащитные очки?"
  });
});

module.exports = router;
