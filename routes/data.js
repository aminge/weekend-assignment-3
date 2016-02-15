var express = require('express');
var router = express.Router();
var path = require('path');
var math = require('mathjs');

router.post('/', function(req, res) {
    console.log(req.body);
    var expression = req.body.expression;
    var result = '';

    try {
        result = math.eval(expression);
    }
    catch(error) {
        res.sendStatus(400);
    }

    req.body.result = result;
    res.send(req.body);
});

module.exports = router;