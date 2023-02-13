import React, { useEffect } from 'react'
import '../Style.css'
import { NextPages } from '../../components/Components';
import { Apport, ConAcq, DiffRen, Objectif, Projet, Projet2, Projet3 } from './DSText';

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Teams'},
    {style: {color: 'blue'}, link: '/InternshipReport/BusinessIntelligence'},
];

const DataScience = ({ closeMobileMenu }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <main>
                <h1 className='title'>DataScience</h1>
                <div id='DS_Objectif'>
                    <h2 className='DS_Text'>Objectif</h2>
                    <p className='paragraph'>{Objectif}</p>
                </div>
                <div id='DS_Projets'>
                    <h2 className='DS_Text'>Projets</h2>
                    <p className='paragraph'>{Projet}</p>
                    <p className='paragraph'>{Projet2}</p>
                    <p className='paragraph'>{Projet3}</p>
                </div>
                <div id='DS_DiffRen'>
                    <h2 className='DS_Text'>Difficultés rencontrées</h2>
                    <p className='paragraph'>{DiffRen}</p>
                </div>
                <div id='DS_ConnAcquises'>
                    <h2 className='DS_Text'>Connaissances acquises</h2>
                    <p className='paragraph'>{ConAcq}</p>
                </div>
                <div id='DS_Apport'>
                    <h2 className='DS_Text'>Mon Apports</h2>
                    <p className='paragraph'>{Apport}</p>
                </div>
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2}/>
        </div>
    );
}

export default DataScience