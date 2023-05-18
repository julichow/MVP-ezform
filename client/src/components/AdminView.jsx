import React, { useState, useEffect } from 'react';

//receive formArray prop from UserView
function AdminView() {
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
      <div className="container-fluid">
        <h3 className="text-dark mt-4 mb-4" style={{ fontFamily: 'sans-serif' }}>List of Ezform employees</h3>
        <div className="row">
          {employees.map((employee) => (
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={employee.id}>
              <div className="card">
                {/* Display image source */}
                <div className="card-image">
                  <img
                    src={employee.url ? employee.url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGzFXWLmEJOIJINzoqCxDsQ5UvK2CSq7KRsT0K3fX6qlSxfFPy2Yf1OI48nFWtECrJbM&usqp=CAU"}
                    alt="No Passport Photo"
                    className="card-image__img"
                  />
                  <p className="card-image__src">{employee.url}</p>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">{employee.fullName}</h5>
                  <div className="text-left">
                    <p className="card-text">Employee ID: {employee.employeeId}</p>
                    <p className="card-text">Email Address: {employee.emailAddress}</p>
                    <p className="card-text">Phone Number: {employee.phoneNumber}</p>
                    <p className="card-text">Address: {employee.address}</p>
                    <p className="card-text">Country: {employee.country}</p>
                    <p className="card-text">Passport Number: {employee.passportNumber}</p>
                    <p className="card-text">Marital Status: {employee.maritalStatus}</p>
                    <p className="card-text">Department: {employee.department}</p>
                    <p className="card-text">Epf Number: {employee.epfNumber}</p>
                    <p className="card-text">Socso number: {employee.socso}</p>
                    <p className="card-text">Employee Start Date: {employee.startDate}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default AdminView;