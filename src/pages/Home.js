import React from 'react';
import PwC_Logo from '../assets/pwc.png'
import Tek_Logo from '../assets/tek.png'
import './style.css'

const Home = () => {
	return (
        <div>
            <h1 className='center-text' style={{
                color: 'orange',
                marginTop: '15vh',
                fontSize: 45
                }}>Rapport de stage</h1>
            <div className='display-image'>
                <img src={PwC_Logo} alt="PwC_Logo" width={400}/>
            </div>
            <div className='center-text'>
                <h2>Remerciements</h2>
                <br/>
                <h2>2ème Année Epitech Nancy</h2>
            </div>
            <div className='display-image'>
                <img src={Tek_Logo} alt="Tek_Logo" width={150} height={150}/>
            </div>
        </div>
	);
};

export default Home;