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
      <div class="btn-group">
  <button type="button" class="btn btn-primary">Search</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" to="/">Name</Link></li>
    <li><Link class="dropdown-item" to="/">Age</Link></li>
    <li><Link class="dropdown-item" to="/">Phone</Link></li>
    <li><Link class="dropdown-item" to="/">Email</Link></li>
  </ul>
</div>
    </div>
  </div>
</nav>
        </>
    )
}