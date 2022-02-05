var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "71605506aA!",
  database: "opentutorials",
});

connection.connect();

connection.query("SELECT * FROM topic", function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

connection.end();
