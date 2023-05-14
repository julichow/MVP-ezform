import React, { useState, useEffect } from 'react';
import AdminView from './AdminView'; // Import the AdminView component

function UserView() {
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
    socso: false,
    passportPhotoURL: "",
  });
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // get the list of employees every time the webpage is loaded
    getEmployees();
  }, []);

  const getEmployees = async () => {
    try {
      const response = await fetch("/api/employees");
      const employees = await response.json();
      setEmployees(employees);
    } catch (error) {
      console.log(error);
    }
  };

  const addEmployees = async (employees) => {
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employees),
    };
    try {
      const response = await fetch("/api/employees", options);
      const newEmployees = await response.json();
      setEmployees(newEmployees);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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
            onChange={handleChange}
        ></input>
      </label>
      <label>Employee ID:<input 
            type="text"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
        ></input>
        </label>
      </div>
      <div>
      <label>Country:
        <input type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
        ></input>
      </label>
      <label>Passport Number:
            <input type="text"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleChange}
        ></input>
        </label>
      </div>
      <div>
      <label>Address:
            <input type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
        ></input>
        </label>
      </div>
      <div>
      <label>Phone Number:
            <input type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
        ></input>
      </label>
      <label>Birth Date:
          <input type="date"
              placeholder="mm/dd/yyyy"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
        ></input>
        </label>
        </div>
      <label> Email Address:
          <input type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
        ></input>
      </label>
      <label>Marital Status:
          <input type="text"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
        ></input>
      </label>

      <h3>Work Information</h3>
      <div>
      <label>Start Date:
          <input type="date"
              placeholder="mm/dd/yyyy" 
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
        ></input>
      </label>
      <label>Epf Number:
      <input 
              type="text"
              name="epfNumber"
              value={formData.epfNumber}
              onChange={handleChange}
        ></input>
        </label>
      </div>
      <div>
      <label>Department:
            <input type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
        ></input>
      </label>
      <label>SOCSO:
            <input type="checkbox"
              name="socso"
              value={formData.socso}
              onChange={handleChange}
            ></input>
      <label for="Yes">Yes</label>
      <input type="checkbox"
          ></input>
      <label for="No">No</label>
        </label>
        </div>
      <label>
        Please share URL copy of your passport photo:
      <input 
        type="url"
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