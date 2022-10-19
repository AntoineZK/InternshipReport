import React from 'react';
import './Style.css'
import PwC_CP_Ext from '../assets/pwcCP.jpg'
import PwC_CP_Int from '../assets/pwcCP2.jpg'
import { EnvWork, EnvWork2, Gbl } from './DévText';
import { NextPages } from '../components/Components';

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Introduction'},
    {style: {color: 'blue'}, link: '/InternshipReport/Teams'},
];

const Developpement = ({ closeMobileMenu }) => {
    return (
        <div>
            <h1 className='title'>Developpement</h1>
            <div id='PwC_Contexte' className='PwC_Text'>
                <h2>Contexte</h2>
            </div>
            <div id='PwC_Global' className='PwC_Text'>
                <h2>PwC Global</h2>
                <p className='paragraph'>{Gbl}</p>
            </div>
            <div id='PwC_Lux' className='PwC_Text'>
                <h2>PwC Luxembourg</h2>
            </div>
            <div id='PwC_CDO' className='PwC_Text'>
                <h2>Le département CDO</h2>
            </div>
            <div id='PwC_IETO' className='PwC_Text'>
                <h2>Informations et outils</h2>
            </div>
            <div id='PwC_Env' className='PwC_Text'>
                <h2>Environnement de travail</h2>
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
