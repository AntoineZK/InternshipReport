import React from 'react';
import { Link } from 'react-router-dom';
import PwC_Logo from '../assets/pwc.png'
import Tek_Logo from '../assets/tek.png'
import './Style.css'

const Home = ({ closeMobileMenu }) => {
	return (
        <div>
            <h1 className='center-text' style={{color: 'orange', marginTop: '15vh', fontSize: 45}}>
                Rapport de stage
            </h1>
            <div className='display-image'>
                <img src={PwC_Logo} alt="PwC_Logo" width={400}/>
            </div>
            <div className='center-text'>
                <h2>Antoine-Zachary KHALIDY</h2>
                <br/>
                <h2>2ème Année Epitech Nancy</h2>
            </div>
            <div className='display-image'>
                <img src={Tek_Logo} alt="Tek_Logo" width={150} height={150}/>
            </div>
            <div className='internship-location_master'>
                <h3>Maître de stage : Éric François</h3>
                <h3>Entreprise : PWC Luxembourg</h3>
            </div>
            <div className='two-link'>
                <i className="fa-solid fa-angle-left fa-3x" style={{color: 'grey'}}></i>
                <i className="fa-solid fa-ellipsis-vertical fa-3x" style={{color: 'blue'}}></i>
                <Link style={{color: 'blue'}} to='/InternshipReport/Remerciements' onClick={closeMobileMenu}>
                    <i className="fa-solid fa-angle-right fa-3x"></i>
                </Link>
            </div>
        </div>
	);
};

export default Home;