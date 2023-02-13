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
        <header>
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
                            Remerciements
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/InternshipReport/Plan' className='nav-links' onClick={closeMobileMenu}>
                            Sommaire
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/InternshipReport/Introduction' className='nav-links' onClick={closeMobileMenu}>
                            Glossaire
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/InternshipReport/Introduction' className='nav-links' onClick={closeMobileMenu}>
                            Introduction
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/InternshipReport/Entreprise' className='nav-links' onClick={closeMobileMenu}>
                            L’Entreprise
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/InternshipReport/Teams' className='nav-links' onClick={closeMobileMenu}>
                            Les Equipes
                            <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <DropDown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/InternshipReport/Conclusion' className='nav-links' onClick={closeMobileMenu}>
                            Conclusion
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;