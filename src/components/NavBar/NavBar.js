import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import './style.css'

const sections = [
	{title: 'Remerciements', link: '/InternshipReport/Remerciements'},
	{title: 'Plan', link: '/InternshipReport/Plan'},
	{title: 'Introduction', link: '/InternshipReport/Introduction'},
	{title: 'Développement', link: '/InternshipReport/Développement'},
	{title: 'Conclusion', link: '/InternshipReport/Conclusion'},
];

function Navbar({ toggle }) {
	return (
		<main>
			<nav className='nav'>
				<Link className='link' to='/InternshipReport'>
					InternshipReport
				</Link>
				<FaBars className='bars' onClick={toggle}/>
				<div className='nav-menu'>
					{sections.map((section) => (
					<Link className='link' to={section.link}>
						{section.title}
					</Link>
					))}
				</div>
			</nav>
		</main>
	)
}

export default Navbar;
