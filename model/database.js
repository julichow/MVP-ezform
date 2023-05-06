require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "employees",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists personal_info; CREATE TABLE personal_info (employeeId INT NOT NULL AUTO_INCREMENT, fullName VARCHAR(30) not null, address VARCHAR(200),country VARCHAR(15) not null, passport VARCHAR(20), emailAddress VARCHAR(25), birthDate date, phoneNumber bigint, maritalStats VARCHAR(10), PRIMARY KEY (employeeId));"; +
    "DROP TABLE if exists work_info; CREATE TABLE work_info (employeeId INT NOT NULL AUTO_INCREMENT, department VARCHAR(30), epfNumber int, SOCSO tinyint(1), startDate date, PRIMARY KEY (employeeId));";  
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `employees` was successful!");

    console.log("Closing...");
  });

  con.end();
});
