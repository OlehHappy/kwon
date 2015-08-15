/**
 * Created by Oleh on 8/14/2015.
 */
var express = require('express');
var app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'goodSQL888',
    database : 'kwon_sql'
});

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    }
});

var article = {
    author: 'Oleh',
    body: '2 second acticle in kwon database'
};

var query = connection.query('insert into articles set ?', article, function (err, result){
   if (err){
       console.error(err);
       return;
   }
    console.log(query.sql);
});

var server = app.listen(5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Kwon app listening at http://%s:%s', host, port);
});
