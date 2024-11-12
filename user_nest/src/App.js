import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Forms from "./Components/Registration/Forms";
import UserTable from "./Components/UserData/UserTable";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";

function App() {

  const [users, setUsers] = useState([]);
  const [sortedUsers , setSortedUsers] = useState([]);

  // Function to add a user to the list
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  // Function to delete a user from the list
  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

console.log(sortedUsers,"sorted");


  return (
    <>
      <div className="App"></div>
      <Router>
        <Navbar  users={users} setUsers={setSortedUsers}/>
            <Routes>
                <Route path="/" element={<Forms addUser={addUser}/>} />
                <Route path="/users" element={<UserTable users={users} sortedUsers={sortedUsers} deleteUser={deleteUser}/>} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
