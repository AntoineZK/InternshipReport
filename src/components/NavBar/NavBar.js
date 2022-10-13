import React from 'react';
import './Style.css';
import { NavLink as Link } from 'react-router-dom';

const sections = [
	{title: 'Remerciements', link: '/InternshipReport/Remerciements'},
	{title: 'Plan', link: '/InternshipReport/Plan'},
	{title: 'Introduction', link: '/InternshipReport/Introduction'},
	{title: 'Développement', link: '/InternshipReport/Développement'},
	{title: 'Conclusion', link: '/InternshipReport/Conclusion'},
];

function Navbar({ handleClick, closeMobileMenu, click }) {
	return (
		<main>
			<nav className='navbar'>
				<Link to='/InternshipReport' className='link' onClick={closeMobileMenu}>
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
					<li className='nav-item-dropdown'>
						<Link className='nav-links-dropdown' to='/InternshipReport/' onClick={closeMobileMenu}>
							Teams
							<i className='fab fa-firstdraft' />
							<ul className='dropdown'>
								<li>
									<Link className='nav-links' to='/InternshipReport/Conclusion' onClick={closeMobileMenu}>
										Datamining
									</Link>
								</li>
								<li>
									<Link className='nav-links' to='/InternshipReport/Conclusion' onClick={closeMobileMenu}>
										Datamining
									</Link>
								</li>
							</ul>
						</Link>
					</li>
				</ul>
			</nav>
		</main>
	);
}

export default Navbar;