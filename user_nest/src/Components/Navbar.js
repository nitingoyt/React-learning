import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({users,setUsers}) {
  const location = useLocation();

  function filterSearch(e){
const {name,value}=e.target

const searchTerm=value.toLowerCase()
setUsers(()=>(
  users.filter(item => item.email.includes(searchTerm)) // Filter by search term
  .sort((a, b) => a.email.localeCompare(b.email))
))

  }
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">UserNest</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
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
            </ul>
            {location.pathname === "/users" && (
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e)=>filterSearch(e)}
           
                  
                
                />
                <div className="btn-group">
                  <button type="button" className="btn btn-primary">
                    Search
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/users">Name</Link></li>
                    <li><Link className="dropdown-item" to="/users">Age</Link></li>
                    <li><Link className="dropdown-item" to="/users">Phone</Link></li>
                    <li><Link className="dropdown-item" to="/users">Email</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
