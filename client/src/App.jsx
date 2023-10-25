import { useState } from 'react'
import './App.css'
import UserView from "./components/UserView";
import AdminView from "./components/AdminView";

//always have function & to export as well 
function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [forms, setForms] = useState([]);
  console.log(forms)

  //handleAddForm is called when a form is submitted in the UserView component
  const handleAddForm = (newForms) => {
console.log("handleAddForm called from App.js", newForms)
//updates the new form to the existing array of forms 
    setForms((state) => [...state, newForms]);
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
        <AdminView formArray={forms} />
      ) : (
        // Render UserView and pass the handleAddForm callback
        <UserView addFormArray={(newForms) => handleAddForm(newForms)}  />
      )}
      <footer className="footer-section">
        <p>@2023 Ezform LLC</p>
      </footer>
    </div>
  );
};

export default App;