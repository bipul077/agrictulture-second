import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
  return (
    <div className="navbar">
       <input type="checkbox" id="check"/>
        <header>
            <h2><a href="/" className="logo">Logo</a></h2>
            <div className="navigation">
                <a href="/">Home</a>
                {/* <Link to="/about">About</Link> */}
                <a href="/about">About</a>
                <a href="#">Info</a>
                <a href="#">Services</a>
                <a href="/contact">Contact</a>
            </div>
            <label htmlFor="check">
                <i className="fas fa-bars menu-btn"></i>
                <i className="fas fa-times close-btn"></i>
            </label>
        </header>
    </div>
  )
}
