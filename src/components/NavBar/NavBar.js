import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './Styles';

const sections = [
  {title: 'About', link: '/InternshipReport/about'},
  {title: 'Services', link: '/InternshipReport/services'},
  {title: 'Contact Us', link: '/InternshipReport/contact-us'},
  {title: 'Sign Up', link: '/InternshipReport/sign-up'},
];

function Navbar() {
	return (
		<main>
			<Nav>
				<NavLink to='/InternshipReport'>
					<img src={require('../../assets/logo.svg')} alt='logo' />
				</NavLink>
				<Bars />
				<NavMenu>
					{sections.map((section) => (
						<NavLink key={section.link} to={section.link}>
							{section.title}
						</NavLink>
					))}
				</NavMenu>
				<NavBtn>
				<NavBtnLink to='/signin'>Sign In</NavBtnLink>
				</NavBtn>
			</Nav>
		</main>
	)
}

export default Navbar;
