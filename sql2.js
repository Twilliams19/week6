// var mysql = require ('mysql');

// var con = mysql.createConnection ({
//     host: "localhost",
//     user: "root",
//     password: "Nuber"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE states", function (err, result) {
//         if (err) throw err;
//         console.log("Database created");
// });
// });


// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Nuber",
//   database: "states"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE infomation (captital VARCHAR(100), state_bird VARCHAR(100))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nuber",
  database: "states"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO infomation (captital, state_bird) VALUES ('Sacramento', 'California_quail')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
