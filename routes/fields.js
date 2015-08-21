/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var router = express.Router();


router.get('/fieldlist', function (req, res) {
    var db = req.db;
    var collection = db.get('domlist');
    collection.find({}, {}, function (e, docs) {
        res.json(docs);
    });
});

router.post('/addFields', function (req, res) {
    var db = req.db;
    var collection = db.get('domlist');
    collection.insert(req.body, function (err, result) {
        res.send((err === null) ? {msg: ''} : {msg: err}
        );
    });
});

module.exports = router;