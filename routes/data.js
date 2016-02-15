var express = require('express');
var router = express.Router();
var path = require('path');

router.post('/', function(req, res) {
    console.log(req.body);
    var x = parseFloat(req.body.x);
    var y = parseFloat(req.body.y);
    var operation = req.body.operation;
    var result = 0;

    console.log('x is: ' + x);
    console.log('y is: ' + y);
    console.log('operation is: ' + operation);

    if (operation === 'add') {
        result = x + y;
    }
    else if (operation === 'subtract') {
        result = x - y;
    }
    else if (operation === 'multiply') {
        result = x * y;
    }
    else if (operation === 'divide') {
        result = x / y;
    }

    console.log('result is: ' + result);

    req.body.result = result;

    res.send(req.body);
});

module.exports = router;