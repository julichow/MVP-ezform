import { useState, useEffect } from 'react'
import './App.css'
import UserView from "./components/UserView";
import AdminView from "./components/AdminView";

//always have function & to export as well 
function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [formInfo, setFormInfo] = useState([]);

  useEffect(() => {
  //the code that we want to run 
    getEmployees();
  }, [isAdmin]); //dependency array

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

  //handleAddForm is called when a form is submitted in the UserView component
  const handleAddForm = (newForms) => {
console.log("handleAddForm called from App.js", newForms)
//updates the new form to the existing array of forms 
    setFormInfo((state) => [...state, newForms]);
  };

  const handleChangeView = (isAdmin) => {
    setIsAdmin(isAdmin);
  };  

  return (
    <div className="app-container">
      <header className="title-section">
        <h1 className="title">Ezform & Co.</h1>
        <div className="button-container">
          {/* Selecting admin view tab */}
          <button
            className={`admin-button${isAdmin ? ' active' : ''}`}
            onClick={() => handleChangeView(true)}
          >
            ADMIN
          </button>
          {/* Selecting user view tab */}
          <button
            className={`user-button${!isAdmin ? ' active' : ''}`}
            onClick={() => handleChangeView(false)}
          >
            USER
          </button>
        </div>
      </header>
      <hr className="line" />
      {isAdmin ? (
        // Render AdminView and pass the formArray
        <AdminView employeesList={formInfo} deleteEmployee={deleteEmployee} />
      ) : (
        // Render UserView and pass the handleAddForm callback
        <UserView addEmployeeData={(newForms) => handleAddForm(newForms)}  />
      )}
      <footer className="footer-section">
        <p>@2023 Ezform LLC</p>
      </footer>
    </div>
  );
};

export default App;