import React, { useEffect } from 'react'
import '../Style.css'
import { NextPages } from '../../components/Components';

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Entreprise'},
    {style: {color: 'blue'}, link: '/InternshipReport/DataScience'},
];

const TeamText = `
Lors de ce stage de 6 mois, j'ai eu la chance de travailler dans deux équipes différentes, chacune durant une période de 3 mois,
la première du 1er juillet au 30 septembre avec l'Équipe “Data Science” dirigé par Joseph Emeras, puis j’ai travaillé du 1er octobre
jusqu’au 31 décembre au sein de l'équipe “Reporting / Dashboarding”. Ces deux équipes sont sensiblement différentes notamment sur leurs objectifs
et les outils qu’ils utilisent.

Cependant, ces équipes “Data Science” et “Reporting / Dashboarding” ont le point commun d’avoir une excellente ambiance de travail
ce qui a facilité mon intégration au sein de leurs équipes.

De plus, ces deux équipes ont un domaine de travail différent ce qui m’a permis de tester différents types de projets,
dans l'équipe “Data Science”, j'ai fait des projets qui consistaient à la récupération de données ainsi qu'à leur utilisation
pour réaliser les tâches demandées.

Dans l'équipe “Reporting / Dashboarding”, j’ai consacré mon temps à récupérer, adapter, créer des requêtes SQL pour
résoudre différents types de projets comme la résolution de RFC ou d’Incident déclaré par des membres de l’entreprise.`

const Teams = ({ closeMobileMenu }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <main>
                <h1 className='title'>Teams</h1>
                <p className='thanks-text'>{TeamText}</p>
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2}/>
        </div>
    )
}

export default Teams