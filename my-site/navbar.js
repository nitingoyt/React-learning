import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">UserNest</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">Users</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true" to='/'>Disabled</Link>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
      <div className="btn-group">
  <button type="button" className="btn btn-primary">Search</button>
  <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/">Name</Link></li>
    <li><Link className="dropdown-item" to="/">Age</Link></li>
    <li><Link className="dropdown-item" to="/">Phone</Link></li>
    <li><Link className="dropdown-item" to="/">Email</Link></li>
  </ul>
</div>
    </div>
  </div>
</nav>
        </>
    )
}



// forms******************************
import React from 'react'

export default function Forms(){
    return(
        <>
         <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Full name" aria-describedby="emailHelp"/>
  </div>
         <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Age</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Age" aria-describedby="emailHelp"/>
  </div>
         <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email@example.com" aria-describedby="emailHelp"/>
  </div>
         <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Contact</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="+91" aria-describedby="emailHelp"/>
    <div className="form-text" id="basic-addon4">Enter +91 indian cell only</div>
  </div>
  <div className="d-grid gap-1 col-3 mx-auto">
  <button className="btn btn-primary" type="button">Submit</button>
</div>
        </>
    )
}

// appjs
import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import Forms from "./components/Registration/Forms";
import UserTable from "./components/userdata/UserTable";
import React from "react";
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


// user js
import React, { useState } from 'react';

export default function UserTable() {
   
    // Delete user function
    return (
        <>
            <table className="table table-bordered caption-top">
                <caption>Users List</caption>
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Nitin</td>
                            <td>34</td>
                            <td>Nitin@123</td>
                            <td>9996548599</td>
                            <td>
                                <button 
                                    className="btn btn-danger btn-sm" 
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                </tbody>
            </table>
        </>
    );
}
