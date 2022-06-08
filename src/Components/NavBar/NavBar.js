import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='navbarContainer'>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top ">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">HandyShop24</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link" href="/#/">Start</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#/Products">Produkte</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#/Cart">Warenkorb</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default NavBar