import React, { useEffect } from 'react';
import './Style.css'
import { HashLink as Link } from 'react-router-hash-link';
import { NextPages } from '../components/Components';

const TwoLink = [
    { style: { color: 'blue' }, link: '/InternshipReport/Remerciements' },
    { style: { color: 'blue' }, link: '/InternshipReport/Glossaire' },
];

const plan = [
    { name: 'Glossaire', link: '/InternshipReport/Introduction' },
    { name: `Introduction`, link: '/InternshipReport/Entreprise' },
    { name: 'L’Entreprise PricewaterhouseCoopers', link: '/InternshipReport/Entreprise#PwC_Contexte' },
    { name: 'PwC Global', link: '/InternshipReport/Entreprise#PwC_Global' },
    { name: 'PwC Luxembourg', link: '/InternshipReport/Entreprise#PwC_Lux' },
    { name: 'Département Central Data Office', link: '/InternshipReport/Entreprise#PwC_CDO' },
    { name: 'Informations et outils', link: '/InternshipReport/Entreprise#PwC_IETO' },
    { name: 'Environnement de travail', link: '/InternshipReport/Entreprise#PwC_Env' },
    { name: 'Équipes', link: '/InternshipReport/Teams' },
    { name: `L'Équipe Data Science`, link: '/InternshipReport/Teams' },
    { name: `L'Équipe Reporting / Dashboarding`, link: '/InternshipReport/Teams' },
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
                            <Link className='plan' to={value.link}>{value.name}</Link>
                        </li>
                    ))}
                </ul>
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2} />
        </div>
    );
};

export default Plan;
