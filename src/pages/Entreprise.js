import React from 'react';
import './Style.css'
import hierarchy from '../assets/Organigramme.png'
import PwC_CP_Ext from '../assets/pwcCP.jpg'
import PwC_CP_Int from '../assets/pwcCP2.jpg'
import Workday from '../assets/workday.png'
import Piwic from '../assets/piwic.png'
import Booking from '../assets/booking.png'
import TimeAndExp from '../assets/timeandex.png'
import statGrowth from '../assets/statPwCGrowth.png'
import { EnvWork, EnvWork2, Gbl, InfOut, CDO, CDO2, Lux, Lux2, Gbl2, InfOut2 } from './DevText';
import { NextPages } from '../components/Components';
import { useEffect } from 'react';

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Introduction'},
    {style: {color: 'blue'}, link: '/InternshipReport/Teams'},
];

const Entreprise = ({ closeMobileMenu }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <main>
                <h1 className='title'>L’Entreprise PricewaterhouseCoopers</h1>
                <div id='PwC_Global'>
                    <h2 className='PwC_Text'>PricewaterhouseCoopers Global</h2>
                    <p className='paragraph'>{Gbl}</p>
                    <p className='paragraph'>{Gbl2}</p>
                </div>
                <div id='PwC_Lux'>
                    <h2 className='PwC_Text'>PricewaterhouseCoopers Luxembourg</h2>
                    <p className='paragraph'>{Lux}</p>
                    <div className='pwcHierarchy'>
                        <img src={statGrowth} alt='growth'/>
                    </div>
                    <p className='paragraph'>{Lux2}</p>
                </div>
                <div id='PwC_CDO'>
                    <h2 className='PwC_Text'>Département Central Data Office</h2>
                    <p className='paragraph'>{CDO}</p>
                    <div className='pwcHierarchy'>
                        <img src={hierarchy} alt="hierarchy"/>
                    </div>
                    <p className='paragraph'>{CDO2}</p>
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
                <div id='PwC_IETO'>
                    <h2 className='PwC_Text'>Informations et outils</h2>
                    <p className='paragraph'>{InfOut}</p>
                    <div className='pwcIETO'>
                        <img className='IETO_IMG' src={Piwic} alt="Piwic" width={800} height={400}/>
                        <img className='IETO_IMG' src={Workday} alt="Workday" width={800} height={400}/>
                    </div>
                    <div className='pwcIETO'>
                        <img className='IETO_IMG' src={Booking} alt="Booking" width={800} height={400}/>
                        <img className='IETO_IMG' src={TimeAndExp} alt="TimeAndExp" width={800} height={400}/>
                    </div>
                    <p className='paragraph'>{InfOut2}</p>
                </div>
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={2}/>
        </div>
    );
};

export default Entreprise;
