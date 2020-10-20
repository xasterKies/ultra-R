import React from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } 'react-icons/md '
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
    return (
        <>
           <div className="navbar">
               <div className="navbar-container container">
                   <Link to='/' className="navbar-logo">
                       
                       ULTRA
                   </Link>
                   <div className="menu-icon">
                       {}
                   </div>
               </div>
            </div> 
        </>
    )
}

export default Navbar
