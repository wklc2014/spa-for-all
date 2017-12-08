var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

var jsonParser = bodyParser.json()

app.get('/api/login.json', jsonParser, cors(), function (req, res) {
    res.send({
        token: 'Hello World!'
    });
});

app.get('/api/login1.json', jsonParser, cors(), function (req, res) {
    res.send({
        token: 'Hello sadfsdf!'
    });
});

var server = app.listen(18888, function () {
    console.log('----------------');
    console.log('server is running');
    console.log('----------------');
});
