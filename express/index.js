
'use strict';
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

// viewed at http://localhost:3000

app.use(express.static(__dirname))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/randomStuff', function(req, res) {
    res.sendFile(path.join(__dirname + '/randomStuff.html'))
});

app.listen(3000);

module.exports.handler = serverless(app);