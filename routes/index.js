var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});
/* GET addFields page.*/
router.get('/addFields',function(req,res,next){
    res.render('addFields',{title:'Express'});
});

module.exports = router;
