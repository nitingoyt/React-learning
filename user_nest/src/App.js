import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Forms from "./Components/Registration/Forms";
import UserTable from "./Components/UserData/UserTable";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  const [users, setUsers] = useState([]);

  // Function to add a user to the list
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  // Function to delete a user from the list
  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="App"></div>
      <Router>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Forms addUser={addUser}/>} />
                <Route path="/users" element={<UserTable users={users} deleteUser={deleteUser}/>} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
