require("dotenv").config();
const mysql = require("mysql2");
const fs = require("fs");

const DB_HOST = process.env.MYSQLHOST;
const DB_USER = process.env.MYSQLUSER;
const DB_PASS = process.env.MYSQLPASSWORD;
const DB_NAME = process.env.MYSQLDATABASE;
const DB_PORT = process.env.MYSQLPORT;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "employees",
  port: DB_PORT || "3306",
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