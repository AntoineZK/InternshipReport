import React from 'react';
import './Style.css'
// import { NavLink as Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const plan = [
	{name: 'Introduction', link: '/InternshipReport/Plan'},
	{name: 'L\'entreprise PriceWaterHouseCoopers', link: '/InternshipReport/Plan'},
	{name: 'Contexte', link: '/InternshipReport/Plan'},
	{name: 'PwC Global', link: '/InternshipReport/Plan'},
	{name: 'PwC Luxembourg', link: '/InternshipReport/Plan'},
	{name: 'Departement CDO', link: '/InternshipReport/Plan'},
	{name: 'Informations et outils', link: '/InternshipReport/Plan'},
	{name: 'Environnement de travail', link: '/InternshipReport/Plan'},
	{name: 'L\'equipe DataMining', link: '/InternshipReport/Plan'},
	{name: 'L\'equipe DataServices', link: '/InternshipReport/Plan'},
];

const Plan = ({ closeMobileMenu }) => {
    return (
        <div>
            <h1 className='center-text' style={{color: 'orange', marginTop: '15vh', fontSize: 45}}>
                Sommaire
            </h1>
            <ul>
                {plan.map((value, index) => (
                    <li>
                        <Link key={index} to={value.link} onClick={closeMobileMenu}>
                            {value.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='two-link'>
                <Link style={{color: 'blue'}} to='/InternshipReport/Remerciements' onClick={closeMobileMenu}>
                    <i className="fa-solid fa-angle-left fa-3x"></i>
                </Link>
                <i className="fa-solid fa-ellipsis-vertical fa-3x" style={{color: 'blue'}}></i>
                <Link style={{color: 'blue'}} to='/InternshipReport/Introduction' onClick={closeMobileMenu}>
                    <i className="fa-solid fa-angle-right fa-3x"></i>
                </Link>
            </div>
        </div>
    );
};

export default Plan;
