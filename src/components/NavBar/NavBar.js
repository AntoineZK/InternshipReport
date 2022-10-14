import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import './Style.css';
import DropDown from './DropDown/DropDown';

function NavBar({ handleClick, closeMobileMenu, click}) {
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        window.innerWidth < 960 ? setDropdown(false) : setDropdown(true);
    };
    const onMouseLeave = () => {
        window.innerWidth < 960 ? setDropdown(false) : setDropdown(false);
    };
    return (
        <main>
            <nav className='navbar'>
                <Link to='/InternshipReport' className='navbar-logo' onClick={closeMobileMenu}>
                    InternshipReport
                    <i className='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/InternshipReport/Remerciements' className='nav-links' onClick={closeMobileMenu}>
                            Remerciement
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/InternshipReport/Plan' className='nav-links' onClick={closeMobileMenu}>
                            Plan
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/InternshipReport/Introduction' className='nav-links' onClick={closeMobileMenu}>
                            Introduction
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/InternshipReport/Développement' className='nav-links' onClick={closeMobileMenu}>
                            Développement
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <p className='nav-links' onClick={closeMobileMenu}>
                            Teams
                            <i className='fas fa-caret-down' />
                        </p>
                        {dropdown && <DropDown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/InternshipReport/Conclusion' className='nav-links' onClick={closeMobileMenu}>
                            Conclusion
                        </Link>
                    </li>
                </ul>
            </nav>
        </main>
    );
}

export default NavBar;