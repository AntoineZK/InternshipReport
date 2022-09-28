import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

const sections = [
    {title: 'Hello', link: '/InternshipReport'},
    {title: 'World', link: '/InternshipReport/Remerciement'},
];

function NavBar() {
    return (
        <>
            <nav className='nav'>
                <Link to='/InternshipReport' className='link'>Test1</Link>
                <div className='menu'>
                    {sections.map((section) => (
                        <Link key={section.link} to={section.link} className='link'>
                            {section.title}
                        </Link>
                    ))}
                </div>
                <nav className='button'>
                    <Link to='/Signing' className='link_button'>Signing</Link>
                </nav>
            </nav>
        </>
    )
}

export default NavBar;