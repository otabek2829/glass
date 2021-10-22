const express = require('express');
const dbProduct = require('../model/Product')
const router = express.Router();

router.get('/products', function(req, res, next) {
  dbProduct.find({} , (err , data) => {
    try {
      res.render('card', { 
        title: 'Продукты',
        db : data 

      });
    } catch (err) {
        console.log(err);
    }
  })
 
});
router.get('/', function(req, res, next) {
  dbProduct.find({} , (err , data) => {
    try {
      res.render('index', { 
        title: 'Главная страница',
        db : data 

      });
    } catch (err) {
        console.log(err);
    }
  })
 
});

module.exports = router;
