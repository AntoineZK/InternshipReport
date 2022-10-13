import React from 'react'
import { NavLink as Link } from 'react-router-dom';
import './Style.css'

const sections = [
	{title: 'Remerciements', link: '/InternshipReport/Remerciements'},
	{title: 'Plan', link: '/InternshipReport/Plan'},
	{title: 'Introduction', link: '/InternshipReport/Introduction'},
	{title: 'Développement', link: '/InternshipReport/Développement'},
	{title: 'Conclusion', link: '/InternshipReport/Conclusion'},
];

const NavBar2 = () => {
    return (
        <main>
        <nav>
            <div id="logo">Your Logo here</div>

            <label for="drop" class="toggle">Menu</label>
            <input type="checkbox" id="drop" />
                <ul class="menu">
                    <li><a href="#">Remerciements</a></li>
                    <li><a href="#">Plan</a></li>
                    <li>
                        <label for="drop-1" class="toggle">WordPress +</label>
                        <a href="#">WordPress</a>
                        <input type="checkbox" id="drop-1"/>
                        <ul>
                            <li><a href="#">Themes and stuff</a></li>
                            <li><a href="#">Plugins</a></li>
                            <li><a href="#">Tutorials</a></li>
                        </ul> 

                    </li>
                    <li>

                    <label for="drop-2" class="toggle">Web Design +</label>
                    <a href="#">Web Design</a>
                    <input type="checkbox" id="drop-2"/>
                    <ul>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Links</a></li>
                    </ul>
                    </li>
                    <li><a href="#">Graphic Design</a></li>
                    <li><a href="#">Inspiration</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </main>
    )
}



export default NavBar2
