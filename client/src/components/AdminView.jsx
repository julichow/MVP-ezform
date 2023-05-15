import React, { useState, useEffect } from 'react';

//receive formArray prop from UserView
function AdminView({ formArray }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // get the list of employees every time the webpage is loaded
    getEmployees();
  }, []);

  //fetching list of employees from the servier
  const getEmployees = async () => {
    let options = {
      method: "GET",
    };
  
    try {
      const response = await fetch("/api/employees", options);
      const newEmployees = await response.json();
      //fetched employees data will be stored in employees useState using setEmployees 
      setEmployees(newEmployees);
      //for troubleshooting
      console.log(newEmployees)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Employees</h1>
      <div>
        {formArray.map((employee) => (
          <div key={employee.id}>
            <p>Full Name: {employee.fullName}</p>
            <p>Employee ID: {employee.employeeId}</p>
            <p>Email Address: {employee.emailAddress}</p>
            <p>Phone Number: {employee.phoneNumber}</p>
            <p>Address: {employee.address}</p>
            <p>Country: {employee.country}</p>
            <p>Passport Number: {employee.passportNumber}</p>
            <p>Marital Status: {employee.maritalStatus}</p>
            <p>Department: {employee.department}</p>
            <p>Epf Number: {employee.epfNumber}</p>
            <p>Socso number: {employee.socso}</p>
            <p>Employee Start Date: {employee.startDate}</p>
            <img src={employee.url}
              alt="No Passport Photo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminView;