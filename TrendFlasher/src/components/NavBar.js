import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-2">
                        <Link className="nav-Link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item mx-2"><Link className="nav-Link" to="/business">Business</Link></li>
                    <li className="nav-item mx-2"><Link className="nav-Link" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item mx-2"><Link className="nav-Link" to="/general">General</Link></li>
                    <li className="nav-item mx-2"><Link className="nav-Link" to="/health">Health</Link></li>
                    <li className="nav-item mx-2"><Link className="nav-Link" to="/science">Science</Link></li>
                    <li className="nav-item mx-2"><Link className="nav-Link" to="/sports">Sports</Link></li>
                    <li className="nav-item mx-2"><Link className="nav-Link" to="/technology">Technology</Link></li>
                    {/* <li className="nav-item dropdown">
                    <a className="nav-Link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'aliceblue',textDecoration:'none'}}>
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/">Action</a>
                    <a className="dropdown-item" href="/">Another action</a>
                    <a className="dropdown-item" href="/">Something else here</a>
                    </div>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
