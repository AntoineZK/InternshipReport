import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Site Name</Link>
            <ul>
                <li>
                    <Link to="/InternshipReport" className='section'>Pricing</Link>
                </li>
                <li>
                    <Link to="/InternshipReport/Remerciement" className='section'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;