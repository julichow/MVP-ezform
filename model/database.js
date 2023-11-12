require("dotenv").config();
const mysql = require("mysql2");
const fs = require("fs");

const MYSQLHOST = process.env.MYSQLHOST;
const MYSQLUSER = process.env.MYSQLUSER;
const MYSQLPASSWORD = process.env.MYSQLPASSWORD;
const MYSQLDATABASE = process.env.MYSQLDATABASE;
const MYSQLPORT = process.env.MYSQLPORT;

const con = mysql.createConnection({
  host: MYSQLHOST || "127.0.0.1",
  user: MYSQLUSER || "root",
  password: MYSQLPASSWORD,
  database: MYSQLDATABASE || "employees",
  port: MYSQLPORT || "3306",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!"); 
 
  let sql = fs.readFileSync(__dirname+"/init_db.sql").toString();  
  
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `employees` was successful!");

    console.log("Closing...");
  });

  con.end();
});