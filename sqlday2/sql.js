var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nuber"

});

con.connect(function(err) {
    if (err) {
     throw err;
    } else{
        console.log("Connected!");

        var sql = "show databases;";
        con.query(sql, function (err, result){
            if(err) throw err;

            for(key in result) {
                console.log("Result", result[key]);
            }
        });
    }

});