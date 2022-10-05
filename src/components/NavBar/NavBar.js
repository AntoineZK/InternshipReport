import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './Styles';

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
			<Nav>
				<NavLink to='/InternshipReport'>
					<img src={require('../../assets/logo.svg')} alt='InternshipReport' />
				</NavLink>
				<Bars onClick={toggle}/>
				<NavMenu>
					{sections.map((section) => (
						<NavLink key={section.link} to={section.link}>
							{section.title}
						</NavLink>
					))}
				</NavMenu>
			</Nav>
		</main>
	)
}

export default Navbar;
