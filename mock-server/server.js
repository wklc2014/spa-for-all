var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

var jsonParser = bodyParser.json();

const getReportConfig = require('./data/getReportConfig.js');

app.get('/api/login.json', jsonParser, cors(), function (req, res) {
    res.send({
        token: 'Hello World!'
    });
});

app.get('/api/getReportConfig.json', jsonParser, cors(), function (req, res) {
    res.send(getReportConfig);
});

var server = app.listen(18888, function () {
    console.log('----------------');
    console.log('server is running');
    console.log('----------------');
});
