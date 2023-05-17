import { useState } from 'react'
import './App.css'
//1. import User View component
import UserView from "./components/UserView";
//1. import Admin View component 
import AdminView from "./components/AdminView";

//always have function & to export as well 
function App() {
  const [isAdmin, setIsAdmin] = useState(true);
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
        <h1 className="title">EZFORM & CO.</h1>
        <div className="button-container">
      {/* selecting admin view tab */}
      <button className="admin-button" onClick={() => handleChangeView(true)}>ADMIN</button> 
      {/* selecting user view tab */}
      <button className="user-button" onClick={() => handleChangeView(false)}>USER</button>
      </div>
      </header>
      <hr className="line" />
        {isAdmin
        // 2. using AdminView import component
        //render Admin View and pass the formArray 
        ? (<AdminView formArray={forms}/>)
        // 2. using UserView import component
        //passing props in react left is prop we'll be passing to UserView and right is the value of the prop
        //render UserView and pass the handleAddForm callback
        : (<UserView addFormArray={(newForms) => handleAddForm(newForms)} />)
      }
      <footer className="footer-section">
        <p>@2023 Ju Li Chow LLC</p>
      </footer>
    </div>
  )
}

export default App; 