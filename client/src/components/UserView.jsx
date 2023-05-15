import React, { useState, useEffect } from 'react';

//declare UserView function that accepts a prop call "addFormArray"
function UserView({ addFormArray }) {
//intialize the formData state variable with an empty string for each field 
  const [formData, setFormData] = useState({
    fullName: "",
    employeeId: "",
    country: "",
    passportNumber: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    emailAddress: "",
    maritalStatus: "",
    startDate: "",
    epfNumber: "",
    department: "",
    socso: "",
    url: "",
  });
  //represents list of employees fetched from the server 
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // get the list of employees every time the webpage is loaded
    getEmployees();
    //empty array to ensure the effect runs only once everytime it loads
  }, []);

//GET request to fetch list of employees from the server 
  const getEmployees = async () => {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch("/api/employees", options);
      //if response is 200, extracts the employee data from the response and updates the employees state using setEmployees
      if (response.status === 200) {
        const employeesData = await response.json();
        setEmployees(employeesData);
      } else {
        console.log("Failed to fetch employees.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const { employeeId, fullName, address, country, passportNumber, emailAddress, birthDate, phoneNumber, maritalStatus, department, epfNumber, socso, startDate } = formData;
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        employeeId,
        fullName,
        address,
        country,
        passportNumber,
        emailAddress,
        birthDate,
        phoneNumber,
        maritalStatus,
        department,
        epfNumber,
        socso,
        startDate,
        url: formData.url,
      }),
    };
  
    fetch("/api/employees", options)
      .then((response) => {
        if (response.status === 200) {
          setEmployees([...employees, {
            employeeId,
            fullName,
            address,
            country,
            passportNumber,
            emailAddress,
            birthDate,
            phoneNumber,
            maritalStatus,
            department,
            epfNumber,
            socso,
            startDate,
            url: formData.url,
          }]);
          addFormArray([...employees, {
            employeeId,
            fullName,
            address,
            country,
            passportNumber,
            emailAddress,
            birthDate,
            phoneNumber,
            maritalStatus,
            department,
            epfNumber,
            socso,
            startDate,
            url: formData.url,
          }])
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Employment Form</h1>
      <form onSubmit={handleSubmit}>
      <h3>Employee Information</h3>
      <div>
      <label>Full Name:<input 
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
        ></input>
      </label>
      <label>Employee ID:<input 
            type="text"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleInputChange}
        ></input>
        </label>
      </div>
      <div>
      <label>Country:
        <input type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
        ></input>
      </label>
      <label>Passport Number:
            <input type="text"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleInputChange}
        ></input>
        </label>
      </div>
      <div>
      <label>Address:
            <input type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
        ></input>
        </label>
      </div>
      <div>
      <label>Phone Number:
            <input type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
        ></input>
      </label>
      <label>Birth Date:
          <input type="date"
              placeholder="mm/dd/yyyy"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
        ></input>
        </label>
        </div>
      <label> Email Address:
          <input type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
        ></input>
      </label>
      <label>Marital Status:
          <input type="text"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleInputChange}
        ></input>
      </label>

      <h3>Work Information</h3>
      <div>
      <label>Start Date:
          <input type="date"
              placeholder="mm/dd/yyyy" 
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
        ></input>
      </label>
      <label>Epf Number:
      <input 
              type="text"
              name="epfNumber"
              value={formData.epfNumber}
              onChange={handleInputChange}
        ></input>
        </label>
      </div>
      <div>
      <label>Department:
            <input type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
        ></input>
      </label>
      <label>SOCSO:
            <input type="text"
              name="socso"
              value={formData.socso}
              onChange={handleInputChange}
            ></input>
            </label>
        </div>
      <label>
        Please share URL copy of your passport photo:
      <input 
            type="text"
            name="url"
            value={formData.url}
            onChange={handleInputChange}
        ></input>
      </label>
      <div>
      <button type="submit">Save</button>
        </div>
      </form>
      </div>
  );
};

export default UserView;