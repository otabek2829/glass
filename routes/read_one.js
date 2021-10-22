const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('read_one' , {
      title: "Как подобрать очки по форме лица?"
  });
});

module.exports = router;
