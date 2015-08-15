/**
 * Created by Oleh on 8/15/2015.
 */
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

function fromsql(callback) {
    connection.query('select * from articles', function (err, result) {
        // console.log(result);
        callback(result);
    });
};

console.log(fromsql());
/*
function fromsql(callback) {
    var x;
    connection.query('select * from articles', function (err, result) {
        callback(result)
    });
    return x;
};

fromsql(function(result){
    // ??? ?????
})


???????:
    ---------------------------------------
var SqlEmitter = new Emitter()
??? ??????
    */