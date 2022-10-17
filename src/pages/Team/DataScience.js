import React from 'react'
import '../Style.css'
import { NextPages } from '../../components/Components';

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Teams'},
    {style: {color: 'grey'}, link: '/'},
];

const DataScience = ({ closeMobileMenu }) => {
    return (
        <div>
            <h1 className='title'>DataScience</h1>
            <div id='DS_Contexte' className='DS_Text'>
                <h2>Contexte</h2>
            </div>
            <div id='DS_Prob' className='DS_Text'>
                <h2>Problématique</h2>
            </div>
            <div id='DS_Objectif' className='DS_Text'>
                <h2>Objectif</h2>
            </div>
            <div id='DS_Projets' className='DS_Text'>
                <h2>Projets</h2>
            </div>
            <div id='DS_DiffRen' className='DS_Text'>
                <h2>Difficultés rencontrées</h2>
            </div>
            <div id='DS_ConnAcquises' className='DS_Text'>
                <h2>Connaissances acquises</h2>
            </div>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={3}/>
        </div>
    );
}

export default DataScience