import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Site Name
            </Link>
        <ul>
            <Link to="/InternshipReport">Pricing</Link>
            <br/>
            <Link to="/InternshipReport/Remerciement">About</Link>
        </ul>
        </nav>
    )
}

export default NavBar;