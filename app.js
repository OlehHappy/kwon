/**
 * Created by Oleh on 8/14/2015.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use('/public', express.static('public'));

var server = app.listen(5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Kwon app listening at http://%s:%s', host, port);
});
