import React from 'react';
import { NextPages } from '../components/Components';
import './Style.css'

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Plan'},
    {style: {color: 'blue'}, link: '/InternshipReport/Developpement'},
];

const Intro = `Nous sommes actuellement dans une ère où les entreprises accordent de plus en plus d'importance à l'informatique ainsi qu'au digital
et plus particulièrement à la data, la Big Data, la recuperation, l'analyse et l'utilisation massive de données.

Notre monde d'aujourd'hui est constitue en quasi totalite de donnee, ces memes donnees qui sont considere comme le "pétrole du numerique". Effectivement,
les donnees sont de plus en plus presente, analyse, sensiblem, volumineuses, ce qui a eu pour impact de completement transformer et revolutionner des 
organisations et leur prise de decision.

Les dirigeants de PricewaterhouseCoopers Luxembourg l'ont compris mieux que personnes et ont digitaliser l'entreprise pour pouvoir resoudre les nouveaux enjeux lie au donnees,
c'est pour cela qu'ils ont investis en consequent pour que dans le futur toutes les donnees qu'ils recuperents soit analyser et utiliser en internes pour limiter
la fuite de donnees qui sont de plus en plus sensible.

De plus, PricewaterhouseCoopers doit rivaliser avec trois autres entreprises qui forment le Big Four, Ernst&Young, KPMG et Deloitte, ce sont leurs principaux rivaux qui ont des activités et
réputations similaire.

J'ai donc eu la chance de pouvoir rejoindre l'equipe Data Science puis Business Intelligence du departement Data Factory de PricewaterhouseCoopers Luxembourg pour découvrir le fonctionnement
d'une équipe d'informatique dans une société aussi importante que PricewaterhouseCoopers.`

const Introduction = ({ closeMobileMenu }) => {
    return (
        <div>
            <main>
                <h1 className='title'>Introduction</h1>
                <p className='paragraph'>{Intro}</p>
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2}/>
        </div>
    );
};

export default Introduction;
