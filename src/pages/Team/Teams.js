import React from 'react'
import '../Style.css'
import { NextPages, TableTeam } from '../../components/Components';

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Developpement'},
    {style: {color: 'blue'}, link: '/InternshipReport/Conclusion'},
];

const TeamText = `Lors de ce stage j'ai eu la chance de travailler dans deux equipes avec de tres bonnes ambiances ainsi que avec des sujets sensiblement different
d'un cote la recuperation de donnee et leurs utilisation quand de l'autre cote j'ai pu faire du reporting`

const Teams = ({ closeMobileMenu }) => {
    return (
        <div>
            <h1 className='title'>Teams</h1>
            <p className='thanks-text'>{TeamText}</p>
			<TableTeam/>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2}/>
        </div>
    )
}

export default Teams