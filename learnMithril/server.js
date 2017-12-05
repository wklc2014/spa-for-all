var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var jsonParser = bodyParser.json()

app.get('/api/login.json', jsonParser, function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(12000, function () {
    console.log('server is running');
});
