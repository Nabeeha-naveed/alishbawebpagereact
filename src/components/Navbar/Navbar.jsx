import React from 'react'
import logo from "../../assets/logo.png"
import "./navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logoimg'/>   
      <div className="navbar-menuIcon"></div>
    </div>
  )
}
