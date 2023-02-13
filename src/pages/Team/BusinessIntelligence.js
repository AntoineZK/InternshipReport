import React, { useEffect } from 'react'
import '../Style.css'
import { NextPages } from '../../components/Components';
import { Apport, ConAcq, DiffRen, Objectif, Projet } from './BIText';


const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/DataScience'},
    {style: {color: 'blue'}, link: '/InternshipReport/Conclusion'},
];

const BusinessIntelligence = ({ closeMobileMenu }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <main>
                <h1 className='title'>Business Intelligence</h1>
                <div id='BI_Objectif'>
                    <h2 className='BI_Text'>Objectif</h2>
                    <p className='paragraph'>{Objectif}</p>
                </div>
                <div id='BI_Projets'>
                    <h2 className='BI_Text'>Projets</h2>
                    <p className='paragraph'>{Projet}</p>
                </div>
                <div id='BI_DiffRen'>
                    <h2 className='BI_Text'>Difficultés rencontrées</h2>
                    <p className='paragraph'>{DiffRen}</p>
                </div>
                <div id='BI_ConnAcquises'>
                    <h2 className='BI_Text'>Connaissances acquises</h2>
                    <p className='paragraph'>{ConAcq}</p>
                </div>
                <div id='BI_Apport'>
                    <h2 className='BI_Text'>Mon Apport</h2>
                    <p className='paragraph'>{Apport}</p>
                </div>
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2}/>
        </div>
    );
}

export default BusinessIntelligence