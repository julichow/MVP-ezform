import React, { useState } from "react";

function AddEmployeeForm({ addEmployeeData }) {
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

  const handleSubmit = () => {
    addEmployee();
    alert("Form submitted successfully");
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
        // pass the data back to the LandingPage using addEmployeeData prop
        addEmployeeData(newEmployee);
      } else {
        console.log("Failed to submit the form.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // Main modal
    <div
      id="crud-modal"
      tabindex="-1"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* Modal content  */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/*  Modal header  */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Create New Employee
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/*  Modal body  */}
          <form onSubmit={handleSubmit} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  for="fullName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  id="fullName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  for="employeeId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Employee ID:
                </label>
                <input
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleInputChange}
                  id="employeeId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="BA9685"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="gender"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gender:
                </label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  id="gender"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Female"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="maritalStatus"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Marital Status:
                </label>
                <input
                  type="text"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                  id="maritalStatus"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Single"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="country"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country:
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  id="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Malaysia"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="passport"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Passport:
                </label>
                <input
                  type="text"
                  name="passport"
                  value={formData.passport}
                  onChange={handleInputChange}
                  id="passport"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="A00000000"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="birthDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Birth Date:
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  id="birthDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>
              <div className="col-span-2">
                <label
                  for="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address:
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  id="address"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your address here"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="phoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number:
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  id="phoneNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="0123456789"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Address:
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="johndoe@gmail.com"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="epf"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Epf Number:
                </label>
                <input
                  type="text"
                  name="epfNumber"
                  value={formData.epfNumber}
                  onChange={handleInputChange}
                  id="epf"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="23474496"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="department"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Department:
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  id="department"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="IT"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="socso"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  SOCSO:
                </label>
                <input
                  type="text"
                  name="SOCSO"
                  value={formData.SOCSO}
                  onChange={handleInputChange}
                  id="socso"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="123456789101"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="startDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Start Date:
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  id="startDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>
              <div className="col-span-2">
                <label
                  for="url"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Please share url copy of your passport photo:
                </label>
                <input
                  type="text"
                  name="url"
                  value={formData.url}
                  onChange={handleInputChange}
                  id="url"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="https://ezform.com/photos"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployeeForm;
