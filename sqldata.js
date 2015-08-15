/**
 * Created by Oleh on 8/14/2015.
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

function bodytosql(txt) {
    var article = {
        author: 'Web Users',
        body: txt
    };

    var query = connection.query('insert into articles set ?', article, function (err, result) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(query.sql);
    });
};

function fromsql(callback, callback2) {
    connection.query('select * from articles', function (err, result) {
        // console.log(result);
        callback(result);
        callback2(100000000);
    });
};

module.exports.bodytosql = bodytosql;
module.exports.fromsql = fromsql;