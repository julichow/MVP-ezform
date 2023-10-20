import React, { useState, useEffect } from "react";

function UserView() {
  //intialize the formData state variable with an empty string for each field
  const [formData, setFormData] = useState({
    fullName: "",
    employeeId: "",
    sex: "",
    maritalStatus: "",
    address: "",
    country: "",
    phoneNumber: "",
    emailAddress: "",
    passport: "",
    birthDate: "",
    department: "",
    epfNumber: "",
    SOCSO: "",
    startDate: "",
    upload: "",
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
    postEmployees();
  }

  const postEmployees = async () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData), // Use formData to send the data
  };

  try {
    const response = await fetch("/api/employees", options);

    if (response.status === 200) {
      const newEmployee = { ...formData }; // Use formData to create the new employee object

      setEmployees([...employees, newEmployee]);
      alert("Form submitted successfully");
    } else {
      console.log("Failed to submit the form.");
    }
  } catch (error) {
    console.log(error);
  }
};
    

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="container">
          <h3 className="form-heading">Employee Information</h3>
          <div className="form-group">
            <label className="label">Full Name:</label>
            <input
              className="input"
              type="text"
              name="fullName"
              value={formData.fullName} 
              onChange={handleInputChange}
            />
            <label className="label">Employee ID:</label>
            <input
              className="input"
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="label">Sex:</label>
            <input
              className="input"
              type="text"
              name="sex"
              value={formData.sex}
              onChange={handleInputChange}
            />
            <label className="label">Marital Status:</label>
            <input
              className="input"
              type="text"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
            />
            <label className="label">Address:</label>
            <input
              className="input"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <label className="label">Country:</label>
            <input
              className="input"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            />

            <div className="form-group">
              <label className="label">Phone Number:</label>
              <input
                className="input"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              <label className="label">Email Address:</label>
              <input
                className="input"
                type="text"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleInputChange}
              />
            </div>
            <label className="label">Passport:</label>
            <input
              className="input"
              type="test"
              name="passport"
              value={formData.passport}
              onChange={handleInputChange}
            />
            <label className="label">Birth Date:</label>
            <input
              className="input"
              type="date"
              placeholder="mm/dd/yyyy"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="container">
          <h3 className="form-heading">Work Information</h3>
          <div className="form-group">
            <label className="label">Start Date:</label>
            <input
              className="input"
              type="date"
              placeholder="mm/dd/yyyy"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
            />
            <label className="label">Epf Number:</label>
            <input
              className="input"
              type="text"
              name="epfNumber"
              value={formData.epfNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="label">Department:</label>
            <input
              className="input"
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            />
            <label className="label">SOCSO:</label>
            <input
              className="input"
              type="text"
              name="SOCSO"
              value={formData.SOCSO}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label className="label">
              Please upload a copy of your passport photo:
            </label>
            <input
              className="input"
              type="url"
              name="upload"
              value={formData.upload}
              onChange={handleInputChange}
            />
      
          </div>
        </div>

        <div className="button">
          <button type="submit" className="peach-button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserView;
