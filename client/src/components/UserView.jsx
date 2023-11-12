import React, { useState } from "react";

function UserView({ addEmployeeData }) {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    maritalStatus: "",
    address: "",
    country: "",
    phoneNumber: "",
    emailAddress: "",
    passport: "",
    birthDate: "",
    employeeId: "",
    department: "",
    epfNumber: "",
    SOCSO: "",
    startDate: "",
    url: "",
  });

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
        //pass the data back to the App (parent) using addEmployeeData prop
        addEmployeeData(newEmployee);
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
            <label for="fullName" className="label">
              Full Name:
            </label>
            <input
              className="input"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="employeeId" className="label">
              Employee ID:
            </label>
            <input
              className="input"
              type="text"
              id="employeeId"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="gender" className="label">
              Gender:
            </label>
            <input
              className="input"
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="country" className="label">
              Country:
            </label>
            <input
              className="input"
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="passport" className="label">
              Passport Number:
            </label>
            <input
              className="input"
              type="text"
              id="passport"
              name="passport"
              value={formData.passport}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="address" className="label">
              Address:
            </label>
            <input
              className="input"
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="phoneNumber" className="label">
              Phone Number:
            </label>
            <input
              className="input"
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="birthDate" className="label">
              Birth Date:
            </label>
            <input
              className="input"
              type="date"
              id="birthDate"
              placeholder="mm/dd/yyyy"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="emailAddress" className="label">
              Email Address:
            </label>
            <input
              className="input"
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="maritalStatus" className="label">
              Marital Status:
            </label>
            <input
              className="input"
              type="text"
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="container">
          <h3 className="form-heading">Work Information</h3>
          <div className="form-group">
            <label for="startDate" className="label">
              Start Date:
            </label>
            <input
              className="input"
              type="date"
              id="startDate"
              placeholder="mm/dd/yyyy"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="epfNumber" className="label">
              Epf Number:
            </label>
            <input
              className="input"
              type="text"
              id="epfNumber"
              name="epfNumber"
              value={formData.epfNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="department" className="label">
              Department:
            </label>
            <input
              className="input"
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="SOCSO" className="label">
              SOCSO:
            </label>
            <input
              className="input"
              type="text"
              id="SOCSO"
              name="SOCSO"
              value={formData.SOCSO}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="url" className="label">
              Please share URL copy of your passport photo:
            </label>
            <input
              className="input"
              type="text"
              id="url"
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
