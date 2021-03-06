'use strict'
const express = require('express');
const moduleHeader = require('./moduleHeader');
var port = Number(process.env.PORT || 8080);

const app = express();
app.use('/', express.static(__dirname + '/public'));
app.get('/api/whoami/', function (req, res) {


    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress||req.ip;
    ip = ip.split(',')[0];
    res.json(moduleHeader(ip, req.headers["accept-language"], req.headers["user-agent"]));
});


app.listen(port, function () {
    console.log('OK');
});