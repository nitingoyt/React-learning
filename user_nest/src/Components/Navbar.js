import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ users, setUsers }) {
  const location = useLocation();
  const [searchType, setSearchType] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTypeChange(type) {
    setSearchType(type);
  }

  function filterSearch(e) {
    const { value } = e.target;
    setSearchTerm(value);
    const term = value.toLowerCase();

    setUsers(() =>
      users
        .filter((item) =>
          item[searchType]?.toString().toLowerCase().includes(term)
        ) // Dynamically use searchType
        .sort((a, b) =>
          a[searchType]?.toString().localeCompare(b[searchType]?.toString())
        )
    );
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            UserNest
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Users
                </Link>
              </li>
            </ul>
            {location.pathname === "/users" && (
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder={`Search by ${searchType}`}
                  aria-label="Search"
                  onChange={filterSearch}
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
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleSearchTypeChange("name")}
                      >
                        Name
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleSearchTypeChange("age")}
                      >
                        Age
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleSearchTypeChange("contact")}
                      >
                        Contact
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleSearchTypeChange("email")}
                      >
                        Email
                      </button>
                    </li>
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
