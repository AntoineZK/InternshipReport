import React from 'react';
import './Style.css'
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
            </div>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2}/>
        </div>
    );
};

export default Developpement;
