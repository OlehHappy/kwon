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

function fromsql(callback) {
    connection.query('SELECT * FROM articles;', function (err, result) {
        callback(result);
        //console.log(result);
    });
};

module.exports.bodytosql = bodytosql;
module.exports.fromsql = fromsql;
