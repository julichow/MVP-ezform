import { useState } from "react";
import "./App.css";
//to represent different views within the form
import UserView from "./components/UserView";
import AdminView from "./components/AdminView";

function App() {
  //initialize state variables
  const [isAdmin, setIsAdmin] = useState(false);
  const [forms, setForms] = useState([]);

  //handleAddForm is called when a form is submitted in the UserView component
  const handleAddForm = (newForms) => {
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
            className={`admin-button${isAdmin ? " active" : ""}`}
            onClick={() => handleChangeView(true)}
          >
            ADMIN
          </button>
          {/* Selecting user view tab */}
          <button
            className={`user-button${!isAdmin ? " active" : ""}`}
            onClick={() => handleChangeView(false)}
          >
            USER
          </button>
        </div>
      </header>
      <hr className="line" />
      {isAdmin ? <AdminView /> : <UserView />}
      <footer className="footer-section">
        <p>@2023 Ezform & Co. LLC</p>
      </footer>
    </div>
  );
}

export default App;
