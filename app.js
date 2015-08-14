/**
 * Created by Oleh on 8/14/2015.
 */
var express = require('express');
var app = express();
var exphbs  = require('express3-handlebars');
app.engine('handlebars',
    exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    var luckyNumber = Math.round(Math.random() * 10);

    res.render('index', {
        name: 'World',
        luckyNumber: luckyNumber
    });
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.use('/public', express.static('public'));

var server = app.listen(5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Kwon app listening at http://%s:%s', host, port);
});
