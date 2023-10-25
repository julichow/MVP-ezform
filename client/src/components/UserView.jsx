import React, { useState, useEffect } from "react";

function UserView({ addFormArray }) {
  const [formData, setFormData] = useState({
    fullName: "",
    employeeId: "",
    country: "",
    passport: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    emailAddress: "",
    maritalStatus: "",
    startDate: "",
    epfNumber: "",
    department: "",
    SOCSO: "",
    url: "",
  });

  const [formInfo, setFormInfo] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch("/api/employees", options);

      if (response.status === 200) {
        const employeesInfo = await response.json();
        setFormInfo(employeesInfo);
      } else {
        console.log("Failed to fetch employees.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEmployee();
  };

  const addEmployee = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch("/api/employees", options);

      if (response.status === 200) {
        const newEmployee = await response.json();
        alert("Form submitted successfully");
        addFormArray([...formInfo, newEmployee]);
      } else {
        console.log("Failed to submit the form.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h3 className="form-heading">Employee Information</h3>
          <div className="form-group">
            <label htmlFor="fullName" className="label">Full Name:</label>
            <input
              className="input"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="employeeId" className="label">Employee ID:</label>
            <input
              className="input"
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country" className="label">Country:</label>
            <input
              className="input"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passport" className="label">Passport Number:</label>
            <input
              className="input"
              type="text"
              name="passport"
              value={formData.passport}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="label">Address:</label>
            <input
              className="input"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber" className="label">Phone Number:</label>
            <input
              className="input"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthDate" className="label">Birth Date:</label>
            <input
              className="input"
              type="date"
              placeholder="mm/dd/yyyy"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailAddress" className="label">Email Address:</label>
            <input
              className="input"
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="maritalStatus" className="label">Marital Status:</label>
            <input
              className="input"
              type="text"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="container">
          <h3 className="form-heading">Work Information</h3>
          <div className="form-group">
            <label htmlFor="startDate" className="label">Start Date:</label>
            <input
              className="input"
              type="date"
              placeholder="mm/dd/yyyy"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="epfNumber" className="label">Epf Number:</label>
            <input
              className="input"
              type="text"
              name="epfNumber"
              value={formData.epfNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="department" className="label">Department:</label>
            <input
              className="input"
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="SOCSO" className="label">SOCSO:</label>
            <input
              className="input"
              type="text"
              name="SOCSO"
              value={formData.SOCSO}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url" className="label">
              Please share URL copy of your passport photo:
            </label>
            <input
              className="input"
              type="text"
              name="url"
              value={formData.url}
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
