import React, { useEffect } from 'react'
import '../Style.css'
import { NextPages, TableTeam } from '../../components/Components';

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Developpement'},
    {style: {color: 'blue'}, link: '/InternshipReport/DataScience'},
];

const TeamText = `Lors de ce stage j'ai eu la chance de travailler dans deux equipes, chacune durant une periode de 3 mois la premiere equipe de la periode du 1er Juillet jusqu'qu 31 Septembre
avec l'equipe DataScience puis 3 mois du 1er Octobre jusqu'au 31 Décembre avec l'equipe Business Intelligence. Ces deux équipes sont sensiblement differente notamment sur leurs objectifs et
leurs outils utilise.
Cependant ces deux equipe ont le point commun d'avoir une ambiance de travail excellente qui a facilite mon integration au sein de leurs équipes.
De plus chaque equipe a un domaine different ce qui m'a permis de tester different types de projet, dans la premiere equipe, de la recuperation et utilsation de donnee via du WebScrapping et
dans la deuxieme equipe de la gestion de base de donnee pour résoudre des incidents déclaré par des membres de l'entreprise.`

const Teams = ({ closeMobileMenu }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <main>
                <h1 className='title'>Teams</h1>
                <p className='thanks-text'>{TeamText}</p>
                <TableTeam />
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2}/>
        </div>
    )
}

export default Teams