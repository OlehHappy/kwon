/**
 * Created by Oleh on 8/14/2015.
 */
var express = require('express');
var app = express();
var sqldata = require('./sqldata.js');

app.get('/', function (req, res) {
    res.send('Kwon aplication');
});

app.get('/tosql/:body?', function (req, res) {
    var txt = req.params.body;
    sqldata.bodytosql(txt);
});

app.get('/fromsql', function (req, res) {
    sqldata.fromsql(function (result){
        res.send(result);
    });
});


var server = app.listen(5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Kwon app listening at http://%s:%s', host, port);
});
