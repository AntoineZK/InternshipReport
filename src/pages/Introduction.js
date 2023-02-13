import React, { useEffect } from 'react';
import { NextPages } from '../components/Components';
import './Style.css'

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Plan'},
    {style: {color: 'blue'}, link: '/InternshipReport/Entreprise'},
];

const Intro = `
Nous sommes actuellement dans un monde et une ère dans laquelle les
entreprises accordent de plus en plus d’importance à l’informatique, au digital et
plus particulièrement à la Big Data, autrement dit la récupération, l’analyse et
l’utilisation massive de données.

Notre monde d'aujourd'hui est constitué en presque totalité de données, ces
mêmes données sont considérées comme le "pétrole du numérique".

Effectivement les données analysées étant de plus en plus présentes, sensibles et
volumineuses, elles ont eu pour impact de transformer et de révolutionner les
services dans leurs organisations et leurs prises de décision.

Les dirigeants de PricewaterhouseCoopers Luxembourg l’ont compris mieux
que personne et ont digitalisé l’entreprise pour pouvoir répondre et résoudre les
nouvelles problématiques liées aux données, c’est pour cela qu’ils ont investi en
conséquence pour que dans le futur toutes les données que
PricewaterhouseCoopers récupère soit analysées et utilisées en interne pour
limiter au maximum les fuites de données.

De plus, PricewaterhouseCoopers Luxembourg doit rivaliser avec trois autres
entreprises qui forment le Big Four : Ernst & Young, KPMG et Deloitte, ce sont les
principaux rivaux étant donné que leurs secteurs d'activité et réputations sont
similaires.

J’ai donc eu la chance de pouvoir rejoindre l'équipe Data Science puis
Reporting / Dashboarding du service Data Factory du département Central Data
Office de PricewaterhouseCoopers pour découvrir le fonctionnement d’une équipe
d’informatique dans une société aussi importante que PricewaterhouseCoopers.
`

const Introduction = ({ closeMobileMenu }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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
