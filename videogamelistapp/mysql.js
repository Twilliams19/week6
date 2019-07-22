var mysql = require ('mysql');

var con = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "Nuber"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query( "use videogamelist ", function (err, result) {
        if (err) throw err;
        console.log("wishlist connected");
        
});
});

// function addGame ("Insert INTO videogamelist (name, developer, players) VALUES ('Halo', 'Bungie', 'four_players'), ('Mass Effect', 'Bungie', 'one_player'),('Gear_of_War', 'Epic_Game', 'two_players'), ('Madden', 'EA_Sports', 'eighteen_players')"){

}
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO videogame (name, developer, players) VALUES ('Halo', 'Bungie',four_players), ('Mass Effect', 'Bungie', 'one_player'),('Gear_of_War', 'Epic_Game', 'two_players'), ('Madden', 'EA_Sports', 'eighteen_players')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("wishlist connected");
    });
  });
