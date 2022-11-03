import React from 'react'
import '../Style.css'
import { NextPages } from '../../components/Components';
import { DiffRen, outils, project } from './DataScienceText';

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Teams'},
    {style: {color: 'grey'}, link: '/'},
];

const DataScience = ({ closeMobileMenu }) => {
    return (
        <div>
            <h1 className='title'>DataScience</h1>
            <div id='DS_Contexte'>
                <h2 className='DS_Text'>Contexte</h2>
            </div>
            <div id='DS_Prob'>
                <h2 className='DS_Text'>Problématique</h2>
            </div>
            <div id='DS_Objectif'>
                <h2 className='DS_Text'>Objectif</h2>
            </div>
            <div id='DS_Outils'>
                <h2 className='DS_Text'>Outils</h2>
                <p className='paragraph'>{outils}</p>
            </div>
            <div id='DS_Projets'>
                <h2 className='DS_Text'>Projets</h2>
                <p className='paragraph'>{project}</p>
            </div>
            <div id='DS_DiffRen'>
                <h2 className='DS_Text'>Difficultés rencontrées</h2>
                <p className='paragraph'>{DiffRen}</p>
            </div>
            <div id='DS_ConnAcquises'>
                <h2 className='DS_Text'>Connaissances acquises</h2>
            </div>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={3}/>
        </div>
    );
}

export default DataScience