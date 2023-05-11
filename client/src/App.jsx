import { useState } from 'react'
import './App.css'
//1. import User View component
import UserView from "./components/UserView";
//1. import Admin View component 
import AdminView from "./components/AdminView";

//always have function & to export as well 
function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [projects, setProjects] = useState([]);

  const handleAddProject = (newProject) => {
    setProjects((state) => [...state, newProject]);
  };

  const handleChangeView = (isAdmin) => {
    setIsAdmin(isAdmin);
  };  

  return (
    <div>
      <button onClick={() => handleChangeView(true)}>ADMIN</button>
      <button onClick={() => handleChangeView(false)}>USER</button>
      {isAdmin
        // 2. using AdminView import component
        ? (<AdminView addProject={(newProject) => handleAddProject(newProject)} />)
        // 2. using UserView import component
        //passing props in react left is prop we'll be passing to UserView and right is the value of the prop
        : (<UserView projectArray={projects} />)
      }
    </div>
  )
}

export default App; 