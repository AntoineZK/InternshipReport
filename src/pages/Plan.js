import React, { useEffect } from 'react';
import './Style.css'
import { HashLink as Link } from 'react-router-hash-link';
import { NextPages } from '../components/Components';

const TwoLink = [
    { style: { color: 'blue' }, link: '/InternshipReport/Remerciements' },
    { style: { color: 'blue' }, link: '/InternshipReport/Introduction' },
];

const plan = [
    { name: 'Introduction', link: '/InternshipReport/Introduction' },
    { name: `L'Entreprise PriceWaterHouseCoopers`, link: '/InternshipReport/Developpement' },
    { name: 'Contexte', link: '/InternshipReport/Developpement#PwC_Contexte' },
    { name: 'PwC Global', link: '/InternshipReport/Developpement#PwC_Global' },
    { name: 'PwC Luxembourg', link: '/InternshipReport/Developpement#PwC_Lux' },
    { name: 'Departement CDO', link: '/InternshipReport/Developpement#PwC_CDO' },
    { name: 'Informations et outils', link: '/InternshipReport/Developpement#PwC_IETO' },
    { name: 'Environnement de travail', link: '/InternshipReport/Developpement#PwC_Env' },
    { name: 'Equipes', link: '/InternshipReport/Teams' },
    { name: `L'Equipe DataScience`, link: '/InternshipReport/Teams' },
    { name: `L'Equipe Business Intelligence`, link: '/InternshipReport/Teams' },
    { name: 'Conclusion', link: '/InternshipReport/Teams' },
];

const Plan = ({ closeMobileMenu }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <main>
                <h1 className='title'>Sommaire</h1>
                <ul style={{ textAlign: 'center', marginTop: '7vh' }}>
                    {plan.map((value, index) => (
                        <li style={{ marginBottom: '3vh' }} key={index}>
                            <Link className='summary_1' to={value.link}>{value.name}</Link>
                        </li>
                    ))}
                </ul>
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2} />
        </div>
    );
};

export default Plan;
