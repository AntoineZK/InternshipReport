import React, { useEffect } from 'react';
import { NextPages } from '../components/Components';
import './Style.css'

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/'},
    {style: {color: 'blue'}, link: '/InternshipReport/Plan'},
];

const manager =
`Je tiens à remercier particulièrement mon manager, Monsieur Éric FRANÇOIS pour
m'avoir permis de réaliser ce stage chez PricewaterhouseCoopers Luxembourg.`

const teams =
`Je remercie également les équipes Data Science et Reporting / Dashboarding pour
m'avoir transmis leurs connaissances et guidé dans la réalisation de mes tâches
ainsi que pour leur aide, leur sympathie et pour m'avoir aidé à m'intégrer à
l'entreprise.`

const epitech =
`Pour finir, je souhaite remercier EPITECH Nancy et toute l'équipe pédagogique pour
la qualité de leur enseignement qui a grandement contribué au bon déroulement
de mon stage.`

const Remerciements = ({ closeMobileMenu }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <main>
                <h1 className='title'>Remerciements</h1>
                <p className='thanks-text'>{manager}</p>
                <p className='thanks-text'>{teams}</p>
                <p className='thanks-text'>{epitech}</p>
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2}/>
        </div>
    );
};

export default Remerciements;
