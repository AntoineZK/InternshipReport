import React, { useEffect } from 'react';
import PwC_Logo from '../assets/pwc.png'
import Tek_Logo from '../assets/tek.png'
import { NextPages } from '../components/Components';
import './Style.css'

const TwoLink = [
    {style: {color: 'grey'}, link: '/'},
    {style: {color: 'blue'}, link: '/InternshipReport/Remerciements'},
];

const Home = ({ closeMobileMenu }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
	return (
        <div>
            <main>
                <h1 className='title'>Rapport de stage</h1>
                <div className='display-image'>
                    <img src={PwC_Logo} alt="PwC_Logo" width={400}/>
                </div>
                <div className='center-text'>
                    <h2>Antoine-Zachary KHALIDY</h2>
                    <br/>
                    <h2>2ème Année Epitech Nancy</h2>
                </div>
                <div className='display-image'>
                    <img src={Tek_Logo} alt="Tek_Logo" width={300} height={150}/>
                </div>
                <div className='internship-location_master'>
                    <h3>Maître de stage : Éric François</h3>
                    <h3>Entreprise : PWC Luxembourg</h3>
                </div>
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={1}/>
        </div>
	);
};

export default Home;