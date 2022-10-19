import React from 'react';
import './Style.css'
import PwC_CP_Ext from '../assets/pwcCP.jpg'
import PwC_CP_Int from '../assets/pwcCP2.jpg'
import { EnvWork, EnvWork2, Gbl } from './DevText';
import { NextPages } from '../components/Components';

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Introduction'},
    {style: {color: 'blue'}, link: '/InternshipReport/Teams'},
];

const Developpement = ({ closeMobileMenu }) => {
    return (
        <div>
            <h1 className='title'>Developpement</h1>
            <div id='PwC_Contexte'>
                <h2 className='PwC_Text'>Contexte</h2>
            </div>
            <div id='PwC_Global'>
                <h2 className='PwC_Text'>PwC Global</h2>
                <p className='paragraph'>{Gbl}</p>
            </div>
            <div id='PwC_Lux'>
                <h2 className='PwC_Text'>PwC Luxembourg</h2>
            </div>
            <div id='PwC_CDO'>
                <h2 className='PwC_Text'>Le département CDO</h2>
            </div>
            <div id='PwC_IETO'>
                <h2 className='PwC_Text'>Informations et outils</h2>
            </div>
            <div id='PwC_Env'>
                <h2 className='PwC_Text'>Environnement de travail</h2>
                <p className='paragraph'>{EnvWork}</p>
                <div className='pwcCP'>
                    <img className='CP_IMG' src={PwC_CP_Ext} alt="PwC_CP_Ext" width={400} height={400}/>
                    <img className='CP_IMG' src={PwC_CP_Int} alt="PwC_CP_Int" width={400} height={400}/>
                </div>
                <p className='paragraph'>{EnvWork2}</p>
            </div>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2}/>
        </div>
    );
};

export default Developpement;
