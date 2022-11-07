import React from 'react'
import { NextPages } from '../components/Components';
import './Style.css'

const TwoLink = [
    {style: {color: 'blue'}, link: '/InternshipReport/Teams'},
    {style: {color: 'grey'}, link: '/'},
];

const Conclusion = ({ closeMobileMenu }) => {
    return (
        <div>
            <main>
                <h1 className='title'>Conclusion</h1>
                <a href="/pwc.png" download>Download my Resume!</a>
            </main>
            <NextPages closeMobileMenu={closeMobileMenu} TwoLink={TwoLink} Status={3}/>
        </div>
    );
}

export default Conclusion