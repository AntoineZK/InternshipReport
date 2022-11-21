import React, { useEffect } from 'react';
import './Style.css'
// import { NavLink as Link } from 'react-router-dom';
import { NavHashLink as Link } from 'react-router-hash-link';
import { NextPages } from '../components/Components';

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Remerciements'},
    {style: {color: 'blue'}, link: '/InternshipReport/Introduction'},
];

const plan = [
	{name: 'Introduction', link: '/InternshipReport/Introduction'},
	{name: 'L\'Entreprise PriceWaterHouseCoopers', link: '/InternshipReport/Developpement'},
	{name: 'Contexte', link: '/InternshipReport/Developpement#PwC_Contexte'},
	{name: 'PwC Global', link: '/InternshipReport/Developpement#PwC_Global'},
	{name: 'PwC Luxembourg', link: '/InternshipReport/Developpement#PwC_Lux'},
	{name: 'Departement CDO', link: '/InternshipReport/Developpement#PwC_CDO'},
	{name: 'Informations et outils', link: '/InternshipReport/Developpement#PwC_IETO'},
	{name: 'Environnement de travail', link: '/InternshipReport/Developpement#PwC_Env'},
	{name: 'Equipes', link: '/InternshipReport/Teams'},
];

const team_sectionDS = [
    {name: 'Contexte', link: '/InternshipReport/DataScience#DS_Contexte'},
	{name: 'Problématique', link: '/InternshipReport/DataScience#DS_Prob'},
	{name: 'Objectif', link: '/InternshipReport/DataScience#DS_Objectif'},
	{name: 'Projets', link: '/InternshipReport/DataScience#DS_Projets'},
	{name: 'Difficultés rencontrées', link: '/InternshipReport/DataScience#DS_DiffRen'},
	{name: 'Connaissances acquises', link: '/InternshipReport/DataScience#DS_ConnAcquises'},
]

const team_sectionBI = [
    {name: 'Contexte', link: '/InternshipReport/BusinessIntelligence#BI_Contexte'},
	{name: 'Problématique', link: '/InternshipReport/BusinessIntelligence#BI_Prob'},
	{name: 'Objectif', link: '/InternshipReport/BusinessIntelligence#BI_Objectif'},
	{name: 'Projets', link: '/InternshipReport/BusinessIntelligence#BI_Projets'},
	{name: 'Difficultés rencontrées', link: '/InternshipReport/BusinessIntelligence#BI_DiffRen'},
	{name: 'Connaissances acquises', link: '/InternshipReport/BusinessIntelligence#BI_ConnAcquises'},
]

function Section({ closeMobileMenu }) {
    const [click, setClick] = React.useState(false);
	const handleClick = () => setClick(!click);
    const [click2, setClick2] = React.useState(false);
	const handleClick2 = () => setClick2(!click2);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <ul style={{textAlign: 'center', marginTop: '7vh'}}>
            {plan.map((value, index) => (
                <li style={{marginBottom: '3vh'}} key={index}>
                    <Link className='summary_1' to={value.link} onClick={closeMobileMenu}>{value.name}</Link>
                </li>
            ))}
            <li style={{marginBottom: '3vh'}} onClick={handleClick}>
                <Link className='summary_1' to='/InternshipReport/Plan'>L'Equipe DataScience</Link>
                <ul className={click > 0 ? 'display-team.active' : 'display-team'}>
                    {team_sectionDS.map((value2, index2) => (
                        <li key={index2}>
                            <Link className='summary_2' to={value2.link} onClick={closeMobileMenu}>
                                <i className="fa-solid fa-arrow-right"></i>{value2.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
            <li  style={{marginBottom: '3vh'}} onClick={handleClick2}>
                <Link className='summary_1' to='/InternshipReport/Plan'>L'Equipe Business Intelligence</Link>
                <ul className={click2 ? 'display-team.active' : 'display-team'}>
                    {team_sectionBI.map((value, index) => (
                        <li>
                            <Link smooth className='summary_2' key={index} to={value.link} onClick={closeMobileMenu}>
                                <i className="fa-solid fa-arrow-right"></i>{value.name}
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
            <main>
                <h1 className='title'>
                    Sommaire
                </h1>
                <Section closeMobileMenu={closeMobileMenu} />
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2}/>
        </div>
    );
};

export default Plan;
