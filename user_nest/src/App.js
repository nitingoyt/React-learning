import "./App.css";
import React from "react";
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
  return (
    <>
      <div className="App"></div>
      <Router>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Forms />} />
                <Route path="/users" element={<UserTable />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
