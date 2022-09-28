import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './Styled.js';

const sections = [
    {title: 'Hello', link: '/InternshipReport'},
    {title: 'World', link: '/InternshipReport/Remerciement'},
];

const Navbar = () => {
  return (
    <main>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../assets/logo.svg')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
            {sections.map((section) => (
                <NavLink to={section.link} activeStyle>
                    {section.title}
                </NavLink>
            ))}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </main>
  );
};

export default Navbar;