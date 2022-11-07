import React from 'react';
import { NextPages } from '../components/Components';
import './Style.css'

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Plan'},
    {style: {color: 'blue'}, link: '/InternshipReport/Developpement'},
];

const Intro = `Nous sommes actuellement dans une ère ou les entreprises accordent de plus en plus d'importance à l'informatique tout en se livrant une guerre
pour savoir qui va le mieux recuperer les donnees, le plus rapidement et analyser c'est meme donnee appeler Big Data.

Dans la societe d'aujourd'hui les donnees sont le 'pétrole du numerique'. Notre monde d'ajourd'hui est compose de donnee de plus en plus volumineuse,
ce qui a pour impact de complétement transformer les organisations et les firmes qui les utilises.

Les dirigeants de PwC Luxembourg ont ete visionnaires et ont compris qu'il fallait beaucoup de chose pour pouvoir rester a la pointe de la technologie et 
des donnees , c'est pour cela qu'ils ont investis, de un pour rester au niveau en terme de technologies et de deux pour pouvoir gerer toutes les donnees
en interne et donc eviter de transmettre des donnees sensible a des firmes de moindre confiance.

De plus PwC Luxembourg doivent rivaliser avec trois autres entreprises qui forment le Big Four ou Fat Fiur, Ernst&Young, KPMG et Deloitte, ce sont ses principaux 
rivaux qui ont des activités et réputations similaire

J'ai donc eu l'opportunité de me joindre aux équipes Data Science et Business Intelligence du departement Data Factory de PwC Luxembourg pour découvrir ce domaine
et ainsi que le fonctionnement d'une équipe d'informatique dans une société aussi importante que PwC qui traite ses problématiques actuelles et futures`

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
