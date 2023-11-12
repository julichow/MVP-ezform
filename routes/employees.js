var express = require('express');
var router = express.Router();
const db = require("../model/helper")

// Define the SQL query string
const employees = ('SELECT * FROM personal_info INNER JOIN employment_info ON personal_info.id = employment_info.id;')

//localhost:4000/api 
router.get('/api', (req, res, next) => {
  res.send('Welcome to the API');
});
  
//GET: localhost:4000/api/employees
router.get("/employees", async (req, res, next) =>{
  try {
    let results = await db(employees);
    // console.log("RESULTS: ", results)
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//POST: localhost:4000/api/employees
router.post("/employees", async (req, res, next) => {
  const { fullName, gender, maritalStatus, address, country, phoneNumber, emailAddress, passport, birthDate, employeeId, department, epfNumber, SOCSO, startDate, url } = req.body;
  // console.log(req.body)
  try {
    //insert new employee. id will be auto incremented
    await db(`INSERT INTO personal_info (fullName, gender, maritalStatus, address, country, phoneNumber, emailAddress, passport, birthDate) VALUES ('${fullName}', '${gender}', '${maritalStatus}', '${address}', '${country}', '${phoneNumber}', '${emailAddress}', '${passport}', '${birthDate}');`);
    await db(`INSERT INTO employment_info(employeeId, department, epfNumber, socso, startDate, url) VALUES ('${employeeId}', '${department}', '${epfNumber}', '${SOCSO}', '${startDate}', '${url}');`);
    //get the updated list of employees
    let results = await db(employees);
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//PUT: localhost:4000/api/employees/:id
router.put("/employees/:id", async function (req, res, next) {
  const { id } = req.params;
  const { fullName, gender, maritalStatus, address, country, phoneNumber, emailAddress, passport, birthDate, employeeId, department, epfNumber, SOCSO, startDate, url } = req.body;
  try {
    //edit employees with specified id from database
    await db(`UPDATE personal_info SET fullName = '${fullName}', gender = '${gender}', maritalStatus = '${maritalStatus}', address = '${address}', country = '${country}', phoneNumber = '${phoneNumber}', emailAddress = '${emailAddress}', passport = '${passport}', birthDate = '${birthDate}' WHERE id = ${id};`); 
    await db(`UPDATE employment_info SET employeeId = '${employeeId}', department = '${department}', epfNumber = '${epfNumber}', SOCSO = '${SOCSO}', startDate = '${startDate}', url = '${url}' WHERE id = ${id};`); 
    //get the updated list of employees
    let results = await db(employees);
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// DELETE: localhost:4000/api/employees/:id
router.delete("/employees/:id", async function(req, res, next) {
  const { id } = req.params;
  // console.log(req.params.id);
  try {
    //delete employees with specified id from database
    await db(`DELETE FROM personal_info WHERE id = ${id};`); 
    await db(`DELETE FROM employment_info WHERE id = ${id};`); 
    //get the updated list of employees
    let results = await db(employees);
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: "Deletion failed"  });
  }
});

module.exports = router;
