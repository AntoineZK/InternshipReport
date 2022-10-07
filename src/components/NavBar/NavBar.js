import React, { useState } from 'react';
import './Navbar.css';
import { NavLink as Link } from 'react-router-dom';
import './style.css'

const sections = [
	{title: 'Remerciements', link: '/InternshipReport/Remerciements'},
	{title: 'Plan', link: '/InternshipReport/Plan'},
	{title: 'Introduction', link: '/InternshipReport/Introduction'},
	{title: 'Développement', link: '/InternshipReport/Développement'},
	{title: 'Conclusion', link: '/InternshipReport/Conclusion'},
];

function Navbar() {
	const [click, setClick] = useState(false);
	
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

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
					{sections.map((section, index) => (
						<li className='nav-item'>
							<Link className='nav-links' key={index} to={section.link} onClick={closeMobileMenu}>
								{section.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</main>
	);
}

export default Navbar;