/**
 * Created by Oleh on 8/14/2015.
 */
var express = require('express');
var app = express();
var sqldata = require('./sqldata.js');


app.get('/tosql/:body?', function (req, res) {
    sqldata.bodytosql(req.params.body);
});

app.get('/fromsql', function (req, res) {
    sqldata.fromsql(function (result){
        res.send(result);
    });
});

// set the static files location

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load our public/index.html file
});


var server = app.listen(5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Kwon app listening at http://%s:%s', host, port);
});