import { useState, useEffect } from "react";
import EmployeesList from "./components/EmployeesList";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  const [formInfo, setFormInfo] = useState([]);

  useEffect(() => {
    //the code that we want to run
    getEmployees();
  }, []); //dependency array

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

  const deleteEmployee = async (id) => {
    let options = {
      method: "DELETE",
    };

    try {
      const response = await fetch(`/api/employees/${id}`, options);

      if (response.status === 200) {
        const deletedEmployeeInfo = await response.json();
        setFormInfo(deletedEmployeeInfo);
      } else {
        console.log("Failed to fetch employees.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />

      <LandingPage />

      <EmployeesList employeesList={formInfo} deleteEmployee={deleteEmployee} />

      <Footer />
    </div>
  );
}

export default App;
