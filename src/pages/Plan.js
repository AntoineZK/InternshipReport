import React from 'react';
import './Style.css'
// import { NavLink as Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


const plan = [
	{name: 'Introduction', link: '/InternshipReport/Plan'},
	{name: 'L\'Entreprise PriceWaterHouseCoopers', link: '/InternshipReport/Plan'},
	{name: 'Contexte', link: '/InternshipReport/Plan'},
	{name: 'PwC Global', link: '/InternshipReport/Plan'},
	{name: 'PwC Luxembourg', link: '/InternshipReport/Plan'},
	{name: 'Departement CDO', link: '/InternshipReport/Plan'},
	{name: 'Informations et outils', link: '/InternshipReport/Plan'},
	{name: 'Environnement de travail', link: '/InternshipReport/Plan'},
];

const team_section = [
    {name: 'Contexte', link: '/InternshipReport/Plan'},
	{name: 'Problématique', link: '/InternshipReport/Plan'},
	{name: 'Objectif', link: '/InternshipReport/Plan'},
	{name: 'Projets', link: '/InternshipReport/Plan'},
	{name: 'Difficultés rencontrées', link: '/InternshipReport/Plan'},
	{name: 'Connaissances acquises', link: '/InternshipReport/Plan'},
]

function Section({ closeMobileMenu }) {
    const [click, setClick] = React.useState(false);
	const handleClick = () => setClick(!click);
    const [click2, setClick2] = React.useState(false);
	const handleClick2 = () => setClick2(!click2);
    return (
        <ul style={{textAlign: 'center'}}>
            {plan.map((value, index) => (
                <li style={{marginBottom: '3vh'}}>
                    <Link className='summary_1' key={index} to={value.link} onClick={closeMobileMenu}>{value.name}</Link>
                </li>
            ))}
            <li style={{marginBottom: '3vh'}} onClick={handleClick}>
                L'Equipe DataMining
                <ul className={click > 0 ? 'display-team.active' : 'display-team'}>
                    {team_section.map((value, index) => (
                        <li>
                            <Link className='summary_2' key={index} to={value.link} onClick={closeMobileMenu}>
                                <i className="fa-solid fa-arrow-right"></i>    {value.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
            <li  style={{marginBottom: '3vh'}} onClick={handleClick2}>
                L'Equipe DataServices
                <ul className={click2 ? 'display-team.active' : 'display-team'}>
                    {team_section.map((value, index) => (
                        <li>
                            <Link className='summary_3' key={index} to={value.link} onClick={closeMobileMenu}>
                                <i className="fa-solid fa-arrow-right"></i>    {value.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
            <li>
                <Link className='summary_1' to='/InternshipReport/Plan' onClick={closeMobileMenu}>Conclusion</Link>
            </li>
        </ul>
    );
}

const Plan = ({ closeMobileMenu }) => {
    return (
        <div>
            <h1 className='title' style={{marginBottom: '7vh'}}>
                Sommaire
            </h1>
            <Section closeMobileMenu={closeMobileMenu} />
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
