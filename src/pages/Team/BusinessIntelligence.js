import React from 'react'
import '../Style.css'
import { NextPages } from '../../components/Components';

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Teams'},
    {style: {color: 'grey'}, link: '/'},
];

const BusinessIntelligence = ({ closeMobileMenu }) => {
    return (
        <div>
            <h1 className='title'>Business Intelligence</h1>
            <div id='BI_Contexte'>
                <h2  className='BI_Text'>Contexte</h2>
            </div>
            <div id='BI_Prob'>
                <h2  className='BI_Text'>Problématique</h2>
            </div>
            <div id='BI_Objectif'>
                <h2  className='BI_Text'>Objectif</h2>
            </div>
            <div id='BI_Projets'>
                <h2  className='BI_Text'>Projets</h2>
            </div>
            <div id='BI_DiffRen'>
                <h2  className='BI_Text'>Difficultés rencontrées</h2>
            </div>
            <div id='BI_ConnAcquises'>
                <h2  className='BI_Text'>Connaissances acquises</h2>
            </div>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={3}/>
        </div>
    );
}

export default BusinessIntelligence