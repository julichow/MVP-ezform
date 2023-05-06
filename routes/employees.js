var express = require('express');
var router = express.Router();
const db = require("../model/helper")

//localhost:4000/api
//test if API is working 
router.get('/', (req, res, next) => {
  res.send('Welcome to the API');
});
  
/*
GET employees list
1. create personal_info & work_info table respectively
2. join both tables
3. view data via postman GET: localhost:4000/api/employees
*/ 
router.get("/", async (req, res, next) =>{
  try {
    let results = await db("SELECT p.employeeId, p.fullName, p.address, p.country, p.passport, p.emailAddress, p.birthDate, p.phoneNumber, p.maritalStatus, w.department, w.epfNumber, w.SOCSO, w.startDate FROM personal_info p JOIN work_info w ON p.employeeID = w.employeeId;");
    // console.log("RESULTS: ", results)
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/*
INSERT a new employee into personal_info
1. create personal_info & work_info table respectively
2. join both tables
3. view data via postman POST: localhost:4000/api/employees
*/
router.post("/", async (req, res, next) => {
  let { employeeId, fullName, address, country, passport, emailAddress, birthDate, phoneNumber, maritalStatus } = req.body;
  // console.log(req.body)
  try {
    //insert new employee. Id will be auto incremented
    await db(`INSERT INTO personal_info ( employeeId, fullName, address, country, passport, emailAddress, birthDate, phoneNumber, maritalStatus) VALUES ('${employeeId}', '${fullName}', '${address}, '${country}', '${passport}', '${emailAddress}', '${birthDate}', '${phoneNumber}', '${maritalStatus}');`);
    //get the updated list of students
    let results = await db('SELECT * FROM personal_info;');
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/*
INSERT a new employee into work_info
1. create personal_info & work_info table respectively
2. join both tables
3. view data via postman POST: localhost:4000/api/employees
*/
router.post("/", async (req, res, next) => {
  let { employeeId, department, epfNumber, SOCSO, startDate } = req.body;
  // console.log(req.body)
  try {
    //insert new employee. Id will be auto incremented
    await db(`INSERT INTO work_info(employeeId, department, epfNumber, SOCSO, startDate) VALUES ('${employeeId}', '${department}', '${epfNumber}', '${SOCSO}', '${startDate}');`);
    //get the updated list of students
    let results = await db('SELECT * FROM work_info;');
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
