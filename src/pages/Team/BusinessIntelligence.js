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
            <div id='BI_Contexte' className='BI_Text'>
                <h2>Contexte</h2>
            </div>
            <div id='BI_Prob' className='BI_Text'>
                <h2>Problématique</h2>
            </div>
            <div id='BI_Objectif' className='BI_Text'>
                <h2>Objectif</h2>
            </div>
            <div id='BI_Projets' className='BI_Text'>
                <h2>Projets</h2>
            </div>
            <div id='BI_DiffRen' className='BI_Text'>
                <h2>Difficultés rencontrées</h2>
            </div>
            <div id='BI_ConnAcquises' className='BI_Text'>
                <h2>Connaissances acquises</h2>
            </div>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={3}/>
        </div>
    );
}

export default BusinessIntelligence