import React from 'react'
import PwC_Logo from '../../assets/pwc.png'
import Tek_Logo from '../../assets/tek.png'
import './Styles.css'

const Footer = () => {
    return (
        <div className='bottom_page'>
            <img src={PwC_Logo} alt="PwC_Logo" width={150} height={150}/>
            <img src={Tek_Logo} alt="Tek_Logo" width={150} height={150}/>
        </div>
    )
}

export default Footer