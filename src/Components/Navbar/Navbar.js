import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
  return (
    <div className="navbar">
       <input type="checkbox" id="check"/>
        <header>
            <h2><Link to="/" className="logo">Logo</Link></h2>
            <div className="navigation">
                <Link to="/">Home</Link>
                <a href="/about">About</a>
                <Link to="/services">Services</Link>
                {/* <a href="/services">Services</a> */}
                <Link to="/contact">Contact</Link>
            </div>
            <label htmlFor="check">
                <i className="fas fa-bars menu-btn"></i>
                <i className="fas fa-times close-btn"></i>
            </label>
        </header>
    </div>
  )
}
