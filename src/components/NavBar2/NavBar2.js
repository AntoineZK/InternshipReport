import React from 'react'
import { NavLink as Link } from 'react-router-dom';
import './Style.css'

// const sections = [
// 	{title: 'Remerciements', link: '/InternshipReport/Remerciements'},
// 	{title: 'Plan', link: '/InternshipReport/Plan'},
// 	{title: 'Introduction', link: '/InternshipReport/Introduction'},
// 	{title: 'Développement', link: '/InternshipReport/Développement'},
// 	{title: 'Conclusion', link: '/InternshipReport/Conclusion'},
// ];

const NavBar2 = () => {
    return (
        <main>
            <nav className='navbar'>
                <div id="logo">InternshipReport</div>
                <label for="drop" className="toggle">Menu</label>
                <input type="checkbox" id="drop" />
                <ul className="sections-list">
                    <li className='section'><Link className='links' to='/InternshipReport'>Remerciements</Link></li>
                    <li className='section'><Link className='links' to='/InternshipReport'>Plan</Link></li>
                    <li className='section'><Link className='links' to='/InternshipReport'>Introduction</Link></li>
                    <li className='section'><Link className='links' to='/InternshipReport'>Développement</Link></li>
                    <li className='section'>
                        <label for="drop-1" className="toggle">Teams +</label>
                        <Link className='links' to='/InternshipReport'>Teams</Link>
                        <input type="checkbox" id="drop-1"/>
                        <ul>
                            <li className='section'><Link className='links' to='/InternshipReport'>Datamining</Link></li>
                            <li className='section'><Link className='links' to='/InternshipReport'>Dataservices</Link></li>
                        </ul> 
                    </li>
                    <li className='section'><Link className='links' to='/InternshipReport'>Conclusion</Link></li>
                </ul>
            </nav>
        </main>
    )
}



export default NavBar2
