import React, { useState, useEffect } from 'react';

function AdminView() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // get the list of employees every time the webpage is loaded
    getEmployees();
  }, []);

  const getEmployees = async () => {
    let options = {
      method: "GET",
    };
  
    try {
      const response = await fetch("/api/employees", options);
      const newEmployees = await response.json();
      setEmployees(newEmployees);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Employees</h1>
      <div>
        {employees.map((employee) => (
          <div key={employee.id}>
            <h2>{employee.fullName}</h2>
            <p>{employee.emailAddress}</p>
            <p>{employee.phoneNumber}</p>
            <p>{employee.address}</p>
            <p>{employee.country}</p>
            <p>{employee.passportNumber}</p>
            <p>{employee.maritalStatus}</p>
            <p>{employee.department}</p>
            <p>{employee.epfNumber}</p>
            <p>{employee.socso}</p>
            <p>{employee.startDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminView;