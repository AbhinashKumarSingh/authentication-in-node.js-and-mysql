var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "services"
});
db.connect((error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("mysql connected ....");
    }
});
module.exports =db